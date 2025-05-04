import type React from "react"
import {
  Code,
  Server,
  Database,
  Layers,
  Zap,
  Globe,
  Lock,
  BarChart,
  Workflow,
  Cpu,
  GitBranch,
  Smartphone,
  Cloud,
  Settings,
  Shield,
  RefreshCw,
  Search,
} from "lucide-react"

// Define the service data type
export interface ServiceData {
  id: string
  imageUrl?: string
  title: string
  shortName?: string
  description: string
  category: string
  icon: React.ReactNode
  lightIcon: React.ReactNode
  benefits: string[]
  overview: string[]
  featuresDescription: string
  features: {
    title: string
    description: string
    icon: React.ReactNode
    lightIcon: React.ReactNode
  }[]
  processDescription: string
  process: {
    title: string
    description: string
  }[]
  technologiesDescription: string
  technologies: string[]
  ctaText: string
  relatedServices?: {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    lightIcon: React.ReactNode
  }[]
}

// Create the services data
const servicesData: Record<string, ServiceData> = {
  nextjs: {
    id: "nextjs",
    title: "NextJS Development",
    imageUrl: "/tech/nextjs.svg",
    shortName: "Next.js",
    description: "Build fast, scalable, and SEO-friendly web applications with Next.js",
    category: "Frontend Development",
    icon: <Code className="h-6 w-6 text-#6366F1" />,
    lightIcon: <Code className="h-6 w-6 text-white" />,
    benefits: [
      "Server-side rendering for improved SEO and performance",
      "Static site generation for blazing fast page loads",
      "Incremental Static Regeneration for dynamic content",
      "Built-in API routes for backend functionality",
      "Optimized image loading and font handling",
    ],
    overview: [
      "Next.js is a powerful React framework that enables features such as server-side rendering and static site generation with zero configuration. It provides an excellent developer experience with features like Fast Refresh and built-in CSS support.",
      "Our Next.js development services help businesses create high-performance web applications that are optimized for search engines and provide exceptional user experiences. We leverage the full potential of Next.js to build scalable, maintainable, and feature-rich applications.",
    ],
    featuresDescription:
      "Our Next.js development services include a comprehensive set of features designed to maximize the potential of your web application.",
    features: [
      {
        title: "Server-Side Rendering",
        description: "Improve SEO and initial page load performance with server-rendered React components.",
        icon: <Server className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Server className="h-5 w-5 text-white" />,
      },
      {
        title: "Static Site Generation",
        description: "Generate static HTML at build time for blazing fast page loads and improved security.",
        icon: <Zap className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Zap className="h-5 w-5 text-white" />,
      },
      {
        title: "API Routes",
        description: "Create serverless API endpoints within your Next.js application for backend functionality.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        title: "Image Optimization",
        description: "Automatically optimize and serve responsive images with the built-in Image component.",
        icon: <Layers className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
      {
        title: "Internationalization",
        description: "Build multi-language support into your application with Next.js i18n features.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        title: "Authentication",
        description: "Implement secure authentication flows with NextAuth.js or custom solutions.",
        icon: <Lock className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Lock className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "Our development process ensures a smooth journey from concept to deployment for your Next.js project.",
    process: [
      {
        title: "Discovery",
        description: "We analyze your requirements and define the project scope, architecture, and technology stack.",
      },
      {
        title: "Design",
        description: "Our designers create wireframes and high-fidelity mockups for your application's user interface.",
      },
      {
        title: "Development",
        description:
          "Our developers build your application using Next.js best practices and modern development workflows.",
      },
      {
        title: "Deployment",
        description: "We deploy your application to production with optimized performance and monitoring setup.",
      },
    ],
    technologiesDescription: "We use the latest technologies and tools in our Next.js development projects.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "React Query",
      "Prisma",
      "GraphQL",
      "REST API",
      "Vercel",
      "AWS",
      "Docker",
      "Jest",
      "Cypress",
    ],
    ctaText: "Let's build your next web application with Next.js. Contact us today to get started!",
    relatedServices: [
      {
        id: "react",
        title: "ReactJS Optimization",
        description: "Optimize your React applications for better performance and user experience.",
        icon: <Zap className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Zap className="h-5 w-5 text-white" />,
      },
      {
        id: "api",
        title: "API Development",
        description: "Build robust and scalable APIs to power your web and mobile applications.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Create beautiful and responsive user interfaces with modern frontend technologies.",
        icon: <Layers className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
    ],
  },
  laravel: {
    id: "laravel",
    title: "Laravel Development",
    imageUrl: "/tech/laravel.png",
    shortName: "Laravel",
    description: "Build robust backend solutions with Laravel's elegant syntax and powerful features",
    category: "Backend Development",
    icon: <Server className="h-6 w-6 text-#6366F1" />,
    lightIcon: <Server className="h-6 w-6 text-white" />,
    benefits: [
      "Elegant MVC architecture for organized code",
      "Robust ORM for simplified database operations",
      "Built-in authentication and authorization",
      "Powerful queue system for background processing",
      "Comprehensive testing tools",
    ],
    overview: [
      "Laravel is a PHP web application framework with expressive, elegant syntax. It provides tools needed for large, robust applications, including a simple, expressive database ORM, intuitive database migrations, and a powerful job queue system.",
      "Our Laravel development services help businesses create secure, scalable, and maintainable backend systems. We leverage Laravel's extensive ecosystem to build custom web applications, APIs, and complex business logic systems that meet your specific requirements.",
    ],
    featuresDescription:
      "Our Laravel development services include a comprehensive set of features designed to create powerful backend systems.",
    features: [
      {
        title: "RESTful API Development",
        description: "Build scalable and well-structured APIs using Laravel's powerful routing and controller system.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        title: "Database Management",
        description:
          "Leverage Laravel's Eloquent ORM and migrations for efficient database operations and version control.",
        icon: <Database className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Database className="h-5 w-5 text-white" />,
      },
      {
        title: "Authentication System",
        description: "Implement secure user authentication with Laravel's built-in authentication scaffolding.",
        icon: <Lock className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Lock className="h-5 w-5 text-white" />,
      },
      {
        title: "Task Scheduling",
        description: "Automate recurring tasks with Laravel's expressive task scheduler and queue system.",
        icon: <RefreshCw className="h-5 w-5 text-#6366F1" />,
        lightIcon: <RefreshCw className="h-5 w-5 text-white" />,
      },
      {
        title: "Real-time Applications",
        description: "Build real-time features with Laravel Echo, Pusher, or WebSockets integration.",
        icon: <Zap className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Zap className="h-5 w-5 text-white" />,
      },
      {
        title: "Testing & Quality Assurance",
        description: "Ensure application reliability with Laravel's built-in testing tools and our QA processes.",
        icon: <Shield className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Shield className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "Our development process ensures a smooth journey from concept to deployment for your Laravel project.",
    process: [
      {
        title: "Requirements Analysis",
        description:
          "We analyze your business requirements and define the technical specifications for your Laravel application.",
      },
      {
        title: "Architecture Design",
        description:
          "Our architects design a scalable and maintainable application structure based on Laravel best practices.",
      },
      {
        title: "Development",
        description: "Our developers build your application using Laravel's features and modern development workflows.",
      },
      {
        title: "Deployment & Support",
        description: "We deploy your application and provide ongoing maintenance and support services.",
      },
    ],
    technologiesDescription: "We use the latest technologies and tools in our Laravel development projects.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Docker",
      "AWS",
      "Nginx",
      "Vue.js",
      "Livewire",
      "Alpine.js",
      "Tailwind CSS",
      "PHPUnit",
      "Laravel Horizon",
    ],
    ctaText: "Ready to build a robust backend system with Laravel? Contact us today to discuss your project!",
    relatedServices: [
      {
        id: "api",
        title: "API Development",
        description: "Build robust and scalable APIs to power your web and mobile applications.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        id: "database",
        title: "Database Design",
        description: "Create efficient and scalable database architectures for your applications.",
        icon: <Database className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Database className="h-5 w-5 text-white" />,
      },
      {
        id: "devops",
        title: "DevOps Services",
        description: "Streamline your development and deployment processes with our DevOps expertise.",
        icon: <GitBranch className="h-5 w-5 text-#6366F1" />,
        lightIcon: <GitBranch className="h-5 w-5 text-white" />,
      },
    ],
  },
  golang: {
    id: "golang",
    title: "Golang Development",
    imageUrl: "/tech/go.png",
    shortName: "Go",
    description: "Build high-performance, concurrent applications using Golang's powerful features",
    category: "Backend Development",
    icon: <Code className="h-6 w-6 text-#6366F1" />,
    lightIcon: <Code className="h-6 w-6 text-white" />,
    benefits: [
      "High performance and efficiency",
      "Built-in concurrency with goroutines",
      "Strong typing and memory safety",
      "Fast compilation and execution",
      "Excellent for microservices architecture",
    ],
    overview: [
      "Go (or Golang) is an open-source programming language designed for building simple, reliable, and efficient software. It combines the ease of programming of an interpreted, dynamically typed language with the efficiency and safety of a statically typed, compiled language.",
      "Our Golang development services help businesses create high-performance applications, microservices, and APIs that can handle massive scale. We leverage Go's concurrency model and efficient memory management to build systems that are both powerful and resource-efficient.",
    ],
    featuresDescription:
      "Our Golang development services include a comprehensive set of features designed to maximize performance and scalability.",
    features: [
      {
        title: "Microservices Development",
        description:
          "Build lightweight, scalable microservices that communicate efficiently and can be deployed independently.",
        icon: <Cloud className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Cloud className="h-5 w-5 text-white" />,
      },
      {
        title: "High-Performance APIs",
        description: "Create blazing fast RESTful and gRPC APIs that can handle high traffic and concurrent requests.",
        icon: <Zap className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Zap className="h-5 w-5 text-white" />,
      },
      {
        title: "Concurrent Processing",
        description: "Leverage Go's goroutines and channels for efficient parallel processing of data and requests.",
        icon: <Cpu className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Cpu className="h-5 w-5 text-white" />,
      },
      {
        title: "System Tools",
        description: "Develop command-line utilities and system tools that are fast, reliable, and resource-efficient.",
        icon: <Settings className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Settings className="h-5 w-5 text-white" />,
      },
      {
        title: "Real-time Applications",
        description: "Build real-time applications with WebSockets and efficient data processing capabilities.",
        icon: <RefreshCw className="h-5 w-5 text-#6366F1" />,
        lightIcon: <RefreshCw className="h-5 w-5 text-white" />,
      },
      {
        title: "Cloud-Native Applications",
        description: "Develop applications optimized for cloud environments with containerization and orchestration.",
        icon: <Cloud className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Cloud className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "Our development process ensures a smooth journey from concept to deployment for your Golang project.",
    process: [
      {
        title: "Requirements Analysis",
        description:
          "We analyze your performance requirements and define the technical specifications for your Go application.",
      },
      {
        title: "Architecture Design",
        description:
          "Our architects design a scalable and efficient application structure optimized for Go's strengths.",
      },
      {
        title: "Development",
        description: "Our developers build your application using Go best practices and modern development workflows.",
      },
      {
        title: "Testing & Deployment",
        description: "We thoroughly test and deploy your application with monitoring and performance optimization.",
      },
    ],
    technologiesDescription: "We use the latest technologies and tools in our Golang development projects.",
    technologies: [
      "Go",
      "gRPC",
      "Protocol Buffers",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Prometheus",
      "Grafana",
      "Gin",
      "GORM",
    ],
    ctaText: "Ready to build high-performance applications with Go? Contact us today to discuss your project!",
    relatedServices: [
      {
        id: "api",
        title: "API Development",
        description: "Build robust and scalable APIs to power your web and mobile applications.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        id: "microservices",
        title: "Microservices Architecture",
        description: "Design and implement microservices-based systems for scalability and maintainability.",
        icon: <Layers className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
      {
        id: "devops",
        title: "DevOps Services",
        description: "Streamline your development and deployment processes with our DevOps expertise.",
        icon: <GitBranch className="h-5 w-5 text-#6366F1" />,
        lightIcon: <GitBranch className="h-5 w-5 text-white" />,
      },
    ],
  },
  react: {
    id: "react",
    title: "ReactJS Optimization",
    imageUrl: "/tech/react.svg",
    shortName: "React",
    description: "Optimize your React applications for better performance and user experience",
    category: "Frontend Development",
    icon: <Zap className="h-6 w-6 text-#6366F1" />,
    lightIcon: <Zap className="h-6 w-6 text-white" />,
    benefits: [
      "Improved application performance",
      "Reduced bundle size for faster loading",
      "Enhanced user experience with smoother interactions",
      "Better SEO through performance improvements",
      "Optimized rendering and state management",
    ],
    overview: [
      "React is a popular JavaScript library for building user interfaces, particularly single-page applications. While React provides a solid foundation, optimizing React applications requires specialized knowledge and techniques.",
      "Our ReactJS optimization services help businesses improve the performance, user experience, and maintainability of their React applications. We analyze your existing codebase, identify bottlenecks, and implement best practices to ensure your application runs smoothly and efficiently.",
    ],
    featuresDescription:
      "Our ReactJS optimization services include a comprehensive set of features designed to enhance your application's performance.",
    features: [
      {
        title: "Performance Audit",
        description:
          "Comprehensive analysis of your React application to identify performance bottlenecks and optimization opportunities.",
        icon: <BarChart className="h-5 w-5 text-#6366F1" />,
        lightIcon: <BarChart className="h-5 w-5 text-white" />,
      },
      {
        title: "Code Splitting",
        description: "Implement efficient code splitting to reduce initial bundle size and improve load times.",
        icon: <Layers className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
      {
        title: "Rendering Optimization",
        description: "Optimize component rendering with memoization, virtualization, and efficient state management.",
        icon: <Zap className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Zap className="h-5 w-5 text-white" />,
      },
      {
        title: "State Management Refactoring",
        description:
          "Refactor state management for better performance using modern approaches like React Query or Zustand.",
        icon: <RefreshCw className="h-5 w-5 text-#6366F1" />,
        lightIcon: <RefreshCw className="h-5 w-5 text-white" />,
      },
      {
        title: "Bundle Size Reduction",
        description:
          "Reduce bundle size by optimizing dependencies, removing unused code, and implementing tree shaking.",
        icon: <Workflow className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
      {
        title: "Mobile Optimization",
        description:
          "Optimize React applications for mobile devices with responsive design and performance improvements.",
        icon: <Smartphone className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Smartphone className="h-5 w-5 text-white" />,
      },
    ],
    processDescription: "Our optimization process ensures a systematic approach to improving your React application.",
    process: [
      {
        title: "Analysis",
        description:
          "We analyze your current React application to identify performance issues and optimization opportunities.",
      },
      {
        title: "Strategy",
        description: "We develop a comprehensive optimization strategy tailored to your specific application needs.",
      },
      {
        title: "Implementation",
        description: "Our developers implement the optimization techniques and best practices in your codebase.",
      },
      {
        title: "Validation",
        description: "We measure and validate the performance improvements to ensure the optimization goals are met.",
      },
    ],
    technologiesDescription: "We use the latest technologies and tools to optimize your React applications.",
    technologies: [
      "React",
      "React Router",
      "Redux",
      "React Query",
      "Zustand",
      "Recoil",
      "TypeScript",
      "Webpack",
      "Vite",
      "Lighthouse",
      "Chrome DevTools",
      "React Profiler",
      "Web Vitals",
      "Tailwind CSS",
    ],
    ctaText: "Ready to optimize your React application for better performance? Contact us today to get started!",
    relatedServices: [
      {
        id: "nextjs",
        title: "NextJS Development",
        description: "Build fast, scalable, and SEO-friendly web applications with Next.js.",
        icon: <Code className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Code className="h-5 w-5 text-white" />,
      },
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Create beautiful and responsive user interfaces with modern frontend technologies.",
        icon: <Layers className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Layers className="h-5 w-5 text-white" />,
      },
      {
        id: "mobile",
        title: "Mobile App Development",
        description: "Build cross-platform mobile applications with React Native.",
        icon: <Smartphone className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Smartphone className="h-5 w-5 text-white" />,
      },
    ],
  },
  integrations: {
    id: "integrations",
    title: "External Integrations",
    description: "Seamlessly connect your applications with third-party services and APIs",
    category: "API & Integration",
    icon: <Workflow className="h-6 w-6 text-#6366F1" />,
    lightIcon: <Workflow className="h-6 w-6 text-white" />,
    benefits: [
      "Seamless data flow between systems",
      "Automated workflows and processes",
      "Enhanced functionality through third-party services",
      "Reduced development time and costs",
      "Improved user experience with integrated features",
    ],
    overview: [
      "In today's interconnected digital ecosystem, the ability to integrate with external services and APIs is crucial for modern applications. External integrations allow your application to leverage specialized services and share data with other systems.",
      "Our external integration services help businesses connect their applications with a wide range of third-party services, including payment processors, authentication providers, AI models, and more. We ensure secure, reliable, and efficient integrations that enhance your application's capabilities.",
    ],
    featuresDescription:
      "Our external integration services include support for a wide range of popular services and custom integration solutions.",
    features: [
      {
        title: "Payment Processing",
        description:
          "Integrate payment gateways like Stripe, PayPal, and others for secure and reliable payment processing.",
        icon: <Database className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Database className="h-5 w-5 text-white" />,
      },
      {
        title: "Authentication",
        description:
          "Implement authentication services like Clerk, Auth0, or custom OAuth solutions for secure user access.",
        icon: <Lock className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Lock className="h-5 w-5 text-white" />,
      },
      {
        title: "AI & LLM Integration",
        description: "Connect your applications with AI services and large language models for intelligent features.",
        icon: <Cpu className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Cpu className="h-5 w-5 text-white" />,
      },
      {
        title: "RAG Systems",
        description: "Implement Retrieval-Augmented Generation systems for context-aware AI responses.",
        icon: <Search className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Search className="h-5 w-5 text-white" />,
      },
      {
        title: "CRM & Marketing",
        description: "Integrate with CRM systems and marketing automation tools to streamline your business processes.",
        icon: <BarChart className="h-5 w-5 text-#6366F1" />,
        lightIcon: <BarChart className="h-5 w-5 text-white" />,
      },
      {
        title: "Custom API Integration",
        description:
          "Connect with any third-party API or service with custom integration solutions tailored to your needs.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
    ],
    processDescription:
      "Our integration process ensures a smooth and secure connection between your application and external services.",
    process: [
      {
        title: "Requirements",
        description:
          "We analyze your integration requirements and define the technical specifications for the integration.",
      },
      {
        title: "Architecture",
        description: "Our architects design a secure and efficient integration architecture based on best practices.",
      },
      {
        title: "Implementation",
        description: "Our developers implement the integration with proper error handling and data validation.",
      },
      {
        title: "Testing & Monitoring",
        description: "We thoroughly test the integration and set up monitoring to ensure reliable operation.",
      },
    ],
    technologiesDescription: "We work with a wide range of integration technologies and services.",
    technologies: [
      "Stripe",
      "Clerk",
      "Auth0",
      "OAuth",
      "OpenAI",
      "LlamaIndex",
      "LangChain",
      "Salesforce",
      "HubSpot",
      "Zapier",
      "Make.com",
      "n8n",
      "Twilio",
      "SendGrid",
      "AWS Services",
    ],
    ctaText: "Ready to enhance your application with powerful integrations? Contact us today to discuss your needs!",
    relatedServices: [
      {
        id: "api",
        title: "API Development",
        description: "Build robust and scalable APIs to power your web and mobile applications.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        id: "automation",
        title: "Automation Solutions",
        description: "Streamline your workflows with custom automation solutions.",
        icon: <Workflow className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
      {
        id: "ai",
        title: "AI Implementation",
        description: "Integrate artificial intelligence capabilities into your applications.",
        icon: <Cpu className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Cpu className="h-5 w-5 text-white" />,
      },
    ],
  },
  automation: {
    id: "automation",
    title: "Automation Solutions",
    description: "Streamline your workflows with Make.com and n8n-based automations",
    category: "Workflow Automation",
    icon: <Workflow className="h-6 w-6 text-#6366F1" />,
    lightIcon: <Workflow className="h-6 w-6 text-white" />,
    benefits: [
      "Reduced manual work and human error",
      "Increased productivity and efficiency",
      "Streamlined business processes",
      "Cost savings through automation",
      "Improved data consistency across systems",
    ],
    overview: [
      "Workflow automation is the technology-enabled automation of complex business processes. It can streamline your operations, reduce manual work, and improve efficiency across your organization.",
      "Our automation solutions help businesses automate repetitive tasks and complex workflows using platforms like Make.com and n8n. We design and implement custom automation scenarios that connect your applications, process data, and trigger actions based on specific conditions.",
    ],
    featuresDescription:
      "Our automation solutions include a comprehensive set of features designed to streamline your workflows.",
    features: [
      {
        title: "Make.com Scenarios",
        description: "Design and implement custom automation scenarios using Make.com's visual workflow builder.",
        icon: <Workflow className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Workflow className="h-5 w-5 text-white" />,
      },
      {
        title: "n8n Workflows",
        description: "Create self-hosted automation workflows with n8n for data-sensitive operations.",
        icon: <RefreshCw className="h-5 w-5 text-#6366F1" />,
        lightIcon: <RefreshCw className="h-5 w-5 text-white" />,
      },
      {
        title: "Data Synchronization",
        description: "Automate data synchronization between different systems and applications.",
        icon: <Database className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Database className="h-5 w-5 text-white" />,
      },
      {
        title: "Conditional Logic",
        description: "Implement complex conditional logic and decision trees in your automation workflows.",
        icon: <GitBranch className="h-5 w-5 text-#6366F1" />,
        lightIcon: <GitBranch className="h-5 w-5 text-white" />,
      },
      {
        title: "Custom JavaScript Functions",
        description: "Extend automation capabilities with custom JavaScript functions for complex data processing.",
        icon: <Code className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Code className="h-5 w-5 text-white" />,
      },
      {
        title: "Error Handling & Monitoring",
        description: "Set up robust error handling and monitoring for your automation workflows.",
        icon: <Shield className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Shield className="h-5 w-5 text-white" />,
      },
    ],
    processDescription: "Our automation process ensures a systematic approach to streamlining your workflows.",
    process: [
      {
        title: "Process Analysis",
        description:
          "We analyze your current processes to identify automation opportunities and potential improvements.",
      },
      {
        title: "Workflow Design",
        description: "Our experts design efficient automation workflows tailored to your specific business needs.",
      },
      {
        title: "Implementation",
        description: "We implement the automation workflows using Make.com, n8n, or custom solutions as appropriate.",
      },
      {
        title: "Testing & Optimization",
        description: "We thoroughly test the automation workflows and optimize them for reliability and efficiency.",
      },
    ],
    technologiesDescription: "We use the latest automation technologies and tools to streamline your workflows.",
    technologies: [
      "Make.com",
      "n8n",
      "Zapier",
      "Airtable",
      "Google Workspace",
      "Microsoft 365",
      "Slack",
      "Trello",
      "Asana",
      "HubSpot",
      "Salesforce",
      "JavaScript",
      "Webhooks",
      "REST APIs",
    ],
    ctaText: "Ready to streamline your workflows with automation? Contact us today to discuss your needs!",
    relatedServices: [
      {
        id: "integrations",
        title: "External Integrations",
        description: "Connect your applications with third-party services and APIs.",
        icon: <Globe className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Globe className="h-5 w-5 text-white" />,
      },
      {
        id: "api",
        title: "API Development",
        description: "Build robust and scalable APIs to power your integrations and automations.",
        icon: <Code className="h-5 w-5 text-#6366F1" />,
        lightIcon: <Code className="h-5 w-5 text-white" />,
      },
      {
        id: "consulting",
        title: "Process Optimization",
        description: "Optimize your business processes for efficiency and scalability.",
        icon: <BarChart className="h-5 w-5 text-#6366F1" />,
        lightIcon: <BarChart className="h-5 w-5 text-white" />,
      },
    ],
  },
}

// Function to get service data by ID
export function getServiceData(id: string): ServiceData | undefined {
  return servicesData[id]
}

// Function to get all services
export function getAllServices() {
  return Object.values(servicesData)
}

// Function to get related services
export function getRelatedServices(id: string, count = 3) {
  const service = servicesData[id]
  if (!service || !service.relatedServices) return []

  return service.relatedServices.slice(0, count)
}
