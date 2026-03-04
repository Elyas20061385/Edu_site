export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readingTime: number;
  featured?: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "react-server-components-deep-dive",
    title: "React Server Components: A Deep Dive Into the Future of Web Apps",
    excerpt: "Server Components change how we think about rendering. Learn how they work under the hood, when to use them, and how they impact performance.",
    content: `
## What Are React Server Components?

React Server Components (RSC) represent a fundamental shift in how we build React applications. Unlike traditional client-side rendering or even server-side rendering, RSCs run **exclusively on the server** and send only the rendered output to the client.

### Why Does This Matter?

The key benefit is **zero bundle size impact**. When you import a heavy library inside a Server Component, that library never ships to the browser. This means faster load times and better user experience.

\`\`\`tsx
// This component runs on the server only
import { analyzeData } from 'heavy-analytics-lib'; // 500KB library

export default async function Dashboard() {
  const data = await analyzeData();
  return <div>{data.summary}</div>;
}
\`\`\`

### Server vs Client Components

The mental model is straightforward:
- **Server Components**: For data fetching, accessing backend resources, keeping sensitive info on the server
- **Client Components**: For interactivity, browser APIs, state management, event handlers

### Performance Impact

In our benchmarks, switching to Server Components reduced the initial JavaScript bundle by **40-60%** for data-heavy pages. The Time to Interactive (TTI) improved by an average of 1.2 seconds.

## Getting Started

To start using Server Components in your project, you need to understand the \`"use client"\` directive. By default, components in the App Router are Server Components. Add \`"use client"\` at the top of a file to make it a Client Component.

\`\`\`tsx
"use client";

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

## Best Practices

1. **Keep Server Components at the top** of your component tree
2. **Push client boundaries down** — only wrap interactive parts
3. **Use streaming** for long-running data fetches
4. **Avoid prop drilling** through the server/client boundary

## Conclusion

React Server Components aren't just an optimization — they're a new paradigm. Start experimenting today to build faster, leaner applications.
    `,
    category: "React",
    coverImage: "",
    author: { name: "Sarah Chen", avatar: "" },
    publishDate: "2026-02-18",
    readingTime: 8,
    featured: true,
    tags: ["React", "Performance", "SSR"],
  },
  {
    id: "2",
    slug: "typescript-advanced-patterns",
    title: "10 TypeScript Patterns Every Senior Developer Should Know",
    excerpt: "From branded types to conditional inference, these patterns will level up your TypeScript skills and make your codebase bulletproof.",
    content: "Full article content here...",
    category: "TypeScript",
    coverImage: "",
    author: { name: "Alex Rivera", avatar: "" },
    publishDate: "2026-02-15",
    readingTime: 12,
    tags: ["TypeScript", "Patterns", "Advanced"],
  },
  {
    id: "3",
    slug: "nodejs-microservices-2026",
    title: "Building Scalable Microservices with Node.js in 2026",
    excerpt: "A practical guide to designing, deploying, and monitoring microservices using modern Node.js tools and cloud-native patterns.",
    content: "Full article content here...",
    category: "Backend",
    coverImage: "",
    author: { name: "James Miller", avatar: "" },
    publishDate: "2026-02-12",
    readingTime: 15,
    tags: ["Node.js", "Microservices", "Architecture"],
  },
  {
    id: "4",
    slug: "css-container-queries-guide",
    title: "CSS Container Queries: The Complete Guide for 2026",
    excerpt: "Container queries are finally here with full browser support. Learn how to build truly responsive components that adapt to their container.",
    content: "Full article content here...",
    category: "CSS",
    coverImage: "",
    author: { name: "Emma Wilson", avatar: "" },
    publishDate: "2026-02-10",
    readingTime: 7,
    tags: ["CSS", "Responsive", "Frontend"],
  },
  {
    id: "5",
    slug: "developer-career-roadmap",
    title: "From Junior to Staff Engineer: A Realistic Career Roadmap",
    excerpt: "What it actually takes to grow in your engineering career — skills, mindset shifts, and the uncomfortable truths nobody talks about.",
    content: "Full article content here...",
    category: "Career",
    coverImage: "",
    author: { name: "David Kim", avatar: "" },
    publishDate: "2026-02-08",
    readingTime: 10,
    tags: ["Career", "Growth", "Engineering"],
  },
  {
    id: "6",
    slug: "docker-kubernetes-web-devs",
    title: "Docker & Kubernetes: A Hands-On Guide for Web Developers",
    excerpt: "Stop being afraid of containers. This practical guide takes you from docker run to a production Kubernetes cluster step by step.",
    content: "Full article content here...",
    category: "DevOps",
    coverImage: "",
    author: { name: "Omar Hassan", avatar: "" },
    publishDate: "2026-02-05",
    readingTime: 14,
    tags: ["Docker", "Kubernetes", "DevOps"],
  },
  {
    id: "7",
    slug: "graphql-vs-rest-2026",
    title: "GraphQL vs REST in 2026: Which One Should You Choose?",
    excerpt: "The debate continues. We break down real-world performance data, DX comparisons, and when each approach truly shines.",
    content: "Full article content here...",
    category: "Backend",
    coverImage: "",
    author: { name: "Lisa Zhang", avatar: "" },
    publishDate: "2026-02-02",
    readingTime: 9,
    tags: ["GraphQL", "REST", "API"],
  },
  {
    id: "8",
    slug: "tailwind-css-v4-whats-new",
    title: "Tailwind CSS v4: Everything New and How to Migrate",
    excerpt: "Tailwind v4 brings a new engine, CSS-first config, and lightning-fast builds. Here's everything you need to know to upgrade.",
    content: "Full article content here...",
    category: "CSS",
    coverImage: "",
    author: { name: "Priya Patel", avatar: "" },
    publishDate: "2026-01-28",
    readingTime: 6,
    tags: ["Tailwind", "CSS", "Frontend"],
  },
  {
    id: "9",
    slug: "web-security-essentials",
    title: "Web Security in 2026: The Essential Checklist for Every Developer",
    excerpt: "XSS, CSRF, and injection attacks are still everywhere. Learn the modern security practices every web developer must implement.",
    content: "Full article content here...",
    category: "Security",
    coverImage: "",
    author: { name: "Sarah Chen", avatar: "" },
    publishDate: "2026-01-25",
    readingTime: 11,
    tags: ["Security", "Best Practices", "Web"],
  },
];

export const categories = [
  "All",
  "React",
  "TypeScript",
  "Backend",
  "CSS",
  "Career",
  "DevOps",
  "Security",
];

export const popularTags = [
  "React", "TypeScript", "Node.js", "CSS", "Performance",
  "Architecture", "DevOps", "Career", "GraphQL", "Security",
  "Frontend", "Tailwind", "Docker",
];
