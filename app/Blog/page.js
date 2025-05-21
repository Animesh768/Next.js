'use client';

import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 via-green-200 to-indigo-400 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-6 text-gray-800">
        <div>
          <h1 className="text-4xl font-bold text-center mb-6">1. Introduction to Next.js Blog</h1>
          <p className="text-sm">
            Next.js is a powerful React framework that makes building websites and web applications fast and efficient. It's ideal for building a blog because it supports Static Site Generation (SSG), Server-Side Rendering (SSR), and API routes, making it flexible for various types of applications. For this simple blog, we will focus on Static Site Generation (SSG) to pre-render the blog posts at build time.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-4">2. Key Concepts of a Blog in Next.js</h2>
          <p className="text-sm font-medium mt-4">Static Site Generation (SSG)</p>
          <p className="text-sm">
            Pre-rendering pages at build time. Great for blogs, as content doesn't change often and can be rendered ahead of time for faster load speeds.
          </p>

          <p className="text-sm font-medium mt-4">Dynamic Routes in Next.js</p>
          <p className="text-sm">
            Dynamic routes are created by using file names with square brackets [ ] in the pages directory. For example, a dynamic page for a blog post could be created at pages/posts/[id].js.
          </p>

          <p className="text-sm font-medium mt-4">Markdown Files for Content</p>
          <p className="text-sm">
            Store blog posts in Markdown files. Markdown is easy to write, and it separates content from presentation. Each file will contain the content and metadata (like title and date).
          </p>

          <p className="text-sm font-medium mt-4">Getting Post Data</p>
          <p className="text-sm">
            Use Node.js fs module to read files. Use gray-matter to parse metadata (front matter) from the markdown files.
          </p>

          <p className="text-sm font-medium mt-4">Linking to Blog Posts</p>
          <p className="text-sm">
            Use Next.js's Link component to navigate between pages. In a blog, you'll link from the homepage to individual blog posts.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-4">3. How a Simple Blog Works in Next.js</h2>
          <p className="text-sm font-medium mt-4">Create Markdown Files for Posts</p>
          <p className="text-sm">
            Blog content is saved in Markdown (.md) files under a folder like public/posts. Each post contains front matter (metadata like title and date) and content (written in Markdown syntax).
          </p>

          <p className="text-sm font-medium mt-4">Read Post Files</p>
          <p className="text-sm">
            Use Next.js's fs (file system) module to read the Markdown files. Parse the metadata (title, date) and content using a Markdown parser like gray-matter.
          </p>

          <p className="text-sm font-medium mt-4">Dynamic Routes for Blog Posts</p>
          <p className="text-sm">
            Next.js allows dynamic routing. For example, a blog post route could look like /posts/[id], where [id] corresponds to the filename (slug) of the blog post. This dynamic route will render the individual post.
          </p>

          <p className="text-sm font-medium mt-4">Static Site Generation (SSG)</p>
          <p className="text-sm">
            With SSG, Next.js generates the HTML for each page at build time, making the blog fast and SEO-friendly. We use getStaticProps to fetch the data for each post. getStaticPaths is used to fetch a list of paths (post slugs) to pre-render all the blog posts.
          </p>

          <p className="text-sm font-medium mt-4">Homepage with List of Posts</p>
          <p className="text-sm">
            On the homepage, you list all blog posts with links to individual pages. This list is static and generated at build time using getStaticProps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
