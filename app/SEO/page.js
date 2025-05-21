'use client'
import React from 'react'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>SEO in Next.js | Animesh Sen</title>
        <meta name="description" content="A professional guide on implementing SEO best practices in Next.js by Animesh Sen." />
      </Head>

      <div style={{
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        background: 'linear-gradient(to right, #f0f7ff, #e6f0ff, #f2faff)',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#222'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          📘 SEO in Next.js
        </h1>

        <p style={{ fontStyle: 'italic', color: '#333', marginBottom: '2rem' }}>
          This document will help you understand and implement SEO best practices in your Next.js application using built-in features, meta tags, dynamic routing, sitemaps, structured data, and more.
          <br /><strong style={{ color: '#0f2a4d' }}>[Author: Animesh Sen]</strong>
        </p>

        <Section title="🔹 1. Why SEO Matters in Next.js?">
          SEO is vital for making your website discoverable in search engines. Next.js supports Server-Side Rendering (SSR) and Static Site Generation (SSG), which are excellent for SEO.
        </Section>

        <Section title="🔹 2. Key SEO Concepts in Next.js">
          <ul>
            <li><strong>Meta Tags:</strong> Title, description, robots, canonical URLs</li>
            <li><strong>Structured Data:</strong> JSON-LD for describing pages</li>
            <li><strong>Sitemap:</strong> Lists all URLs of your website</li>
            <li><strong>Open Graph:</strong> Meta tags for social media</li>
            <li><strong>SSR/SSG:</strong> Helps search engines index content</li>
            <li><strong>Robots.txt:</strong> Controls crawling behavior</li>
          </ul>
        </Section>

        <Section title="🔹 3. Adding Meta Tags in Next.js">
          <CodeBlock>{`import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Best Online Courses | EduPlatform</title>
        <meta name="description" content="Join the best online courses to boost your career with EduPlatform." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eduplatform.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Online Courses | EduPlatform" />
        <meta property="og:description" content="Boost your career." />
        <meta property="og:image" content="https://www.eduplatform.com/images/banner.jpg" />
        <meta property="og:url" content="https://www.eduplatform.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Online Courses | EduPlatform" />
        <meta name="twitter:description" content="Boost your career." />
        <meta name="twitter:image" content="https://www.eduplatform.com/images/banner.jpg" />
      </Head>
    </>
  )
}`}</CodeBlock>
        </Section>

        <Section title="🔹 4. Dynamic Meta Tags">
          <CodeBlock>{`export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return {
    props: { post },
  }
}

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={\`https://www.site.com/posts/\${post.slug}\`} />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  )
}`}</CodeBlock>
        </Section>

        <Section title="🔹 5. Sitemap Generation">
          <CodeBlock>{`npm install next-sitemap`}</CodeBlock>
          <p>Create <code>next-sitemap.config.js</code>:</p>
          <CodeBlock>{`module.exports = {
  siteUrl: 'https://www.yoursite.com',
  generateRobotsTxt: true,
}`}</CodeBlock>
          <p>In <code>package.json</code>:</p>
          <CodeBlock>{`"scripts": {
  "postbuild": "next-sitemap"
}`}</CodeBlock>
        </Section>

        <Section title="🔹 6. robots.txt Example">
          <CodeBlock>{`User-agent: *
Allow: /

Sitemap: https://www.yoursite.com/sitemap.xml`}</CodeBlock>
        </Section>
      </div>
    </>
  )
}

const Section = ({ title, children }) => (
  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{
      color: '#1c2b36',
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    }}>{title}</h2>
    <div style={{ color: '#222' }}>{children}</div>
  </section>
)

const CodeBlock = ({ children }) => (
  <pre style={{
    background: 'linear-gradient(145deg, #eef3f9, #dfeaf5)',
    padding: '1rem',
    borderRadius: '10px',
    fontFamily: 'Consolas, monospace',
    fontSize: '0.9rem',
    whiteSpace: 'pre-wrap',
    color: '#1d1f21',
    overflowX: 'auto'
  }}>
    {children}
  </pre>
)

export default Page
