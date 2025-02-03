import glob from "fast-glob";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import fs from "fs/promises";
import Image from "next/image";

// Type for blog post metadata
interface PostMetadata {
  title: string;
  date: string;
  description: string;
  readingTime: string;
  slug: string;
}

// Function to read and parse frontmatter from .md file
async function getPostMetadata(mdxPath: string): Promise<PostMetadata> {
  const slug = mdxPath.replace("/page.mdx", "");
  const frontmatterPath = `src/app/blog/${slug}/f.md`;
  
  try {
    const frontmatterContent = await fs.readFile(frontmatterPath, 'utf-8');
    const metadata = JSON.parse(frontmatterContent);
    
    return {
      title: metadata.title || slug.split("/").pop()?.replace(/-/g, " ") || "",
      date: metadata.date ? format(new Date(metadata.date), "MMMM dd, yyyy") : format(new Date(), "MMMM dd, yyyy"),
      description: metadata.description || "No description available.",
      readingTime: metadata.readingTime || "5 min read",
      slug,
    };
  } catch (error) {
    console.warn(`Warning: Could not read frontmatter for ${slug}`, error);
    // Fallback metadata if frontmatter file is missing or invalid
    return {
      title: slug.split("/").pop()?.replace(/-/g, " ") || "",
      date: format(new Date(), "MMMM dd, yyyy"),
      description: "No description available.",
      readingTime: "5 min read",
      slug,
    };
  }
}

export default async function BlogPage() {
  const postFiles = await glob("src/app/blog/**/*.mdx");
  const posts: PostMetadata[] = await Promise.all(
    postFiles.map(async (file) => {
      const relativePath = file.replace("src/app/blog/", "");
      return getPostMetadata(relativePath);
    })
  );

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto py-32 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {sortedPosts.map((post) => (
          <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Link 
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2 group-hover:opacity-80 transition-opacity"
              >
                <h2 className="text-2xl font-semibold capitalize">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-primary">
                    Read more
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}