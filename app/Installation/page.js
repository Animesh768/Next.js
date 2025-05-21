import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-black via-purple-950   to-pink-950 flex items-center justify-center">
      <div className="text-white text-sm max-w-3xl p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">1. Introduction to Next.js</h2>
            <p>
              Next.js is a React framework that enables you to build static and dynamic websites and web applications. It offers features like server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR).
            </p>
            <ul className="list-disc pl-5">
              <li><strong>Server-side Rendering (SSR):</strong> Pages are rendered on the server before sending to the client, improving SEO and page load time.</li>
              <li><strong>Static Site Generation (SSG):</strong> Pages are pre-rendered at build time, providing faster load times.</li>
              <li><strong>API Routes:</strong> Ability to create backend API endpoints in the same project as the front end.</li>
              <li><strong>File-based Routing:</strong> Next.js uses a file-based routing system where files inside the pages directory are automatically routes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">2. Installation and Setup</h2>
            <p>To get started with Next.js, follow these steps:</p>
            <pre className="bg-gray-800 p-4 rounded text-white font-mono">
              <code>
                npx create-next-app@latest my-next-app<br />
                cd my-next-app<br />
                npm run dev
              </code>
            </pre>
            <p><strong>Dependencies:</strong></p>
            <ul className="list-disc pl-5">
              <li>React</li>
              <li>React-DOM</li>
              <li>Next.js</li>
            </ul>
            <p><strong>Folder Structure:</strong></p>
            <pre className="bg-gray-800 p-4 rounded text-white font-mono">
              <code>
                my-next-app/<br />
                ├── pages/<br />
                ├── public/<br />
                ├── styles/<br />
                ├── node_modules/<br />
                ├── package.json<br />
                ├── next.config.js<br />
                └── .next/
              </code>
            </pre>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
