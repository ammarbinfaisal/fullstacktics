import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog'],
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

const withMDX = createMDX({
  // Keep it simple for Turbopack compatibility
})

export default withMDX(nextConfig)
