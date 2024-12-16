import React from 'react';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const teamData = [
  {
    name: "Malik Ammar Faisal",
    role: "Systems Architecture Expert",
    expertise: [
      "Programming Language Design",
      "Concurrent Systems",
      "Low-level Programming",
      "System Architecture"
    ],
    education: "BTech Computer Science, Amity University",
    bio: "Full stack developer with deep expertise in systems programming and language design. Creator of innovative concurrent programming solutions and low-level system architectures.",
    links: {
      github: "https://github.com/ammarbinfaisal",
      linkedin: "https://linkedin.com/in/malik-ammar-faisal",
      email: "ammar@fullstacktics.com"
    }
  },
  {
    name: "Malik Hammad Faisal",
    role: "AI & Machine Learning Expert",
    expertise: [
      "Natural Language Processing",
      "Deep Learning",
      "Computer Vision",
      "Competitive Programming"
    ],
    education: "BTech Computer Science, IIT Delhi",
    bio: "AI specialist with strong academic background and competitive programming achievements. Experienced in developing advanced ML models and NLP solutions.",
    links: {
      github: "https://github.com/hammadfaisal",
      linkedin: "https://linkedin.com",
      email: "faisalmalikhammad@gmail.com"
    }
  },
  {
    name: "Mohammad Aquib",
    role: "Web Development Expert",
    expertise: [
      "Full Stack Development",
      "PHP/Laravel",
      "React.js",
      "Database Design"
    ],
    education: "MCA, Maulana Azad National Urdu University",
    bio: "Seasoned web developer with 4+ years of experience in building scalable web applications. Specialized in PHP, Laravel, and modern JavaScript frameworks.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "aquib@fullstacktics.com"
    }
  }
];

const TeamSection = () => {
  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Meet Our Team
        </h2>
        <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground">
          Our team of expert developers brings together deep knowledge in systems architecture, 
          artificial intelligence, and web development to deliver comprehensive solutions.
        </p>
      </div>
      
      <div className="grid px-4 lg:px-12 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamData.map((member) => (
          <Card key={member.name} className="group relative overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="mb-1.5">{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <p className="text-sm font-medium mb-2">Core Expertise:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {member.expertise.map((skill) => (
                    <li key={skill} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center gap-4 pt-4 border-t">
                <a href={member.links.github} className="text-muted-foreground hover:text-primary">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a href={member.links.linkedin} className="text-muted-foreground hover:text-primary">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href={`mailto:${member.links.email}`} className="text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;