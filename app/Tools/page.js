'use client';

import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-black via-gray-700 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-base p-8 max-w-3xl w-full space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-center mb-6">Next.js Tools Overview</h1>
        </div>

        {/* Vercel Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">1. Vercel</h2>
          <p>
            Vercel is the platform developed by the creators of Next.js and is the easiest and most efficient way to deploy Next.js applications.
          </p>
          <ul className="list-inside list-disc pl-4 text-sm">
            <li><strong>Seamless Deployment:</strong> Deploying Next.js applications to Vercel is as simple as pushing code to GitHub or GitLab.</li>
            <li><strong>Automatic Static Optimization:</strong> Vercel automatically optimizes static pages and improves site performance.</li>
            <li><strong>Serverless Functions:</strong> Vercel supports deploying serverless functions (API routes) with Next.js.</li>
            <li><strong>Preview Deployments:</strong> Every push to your Git repository automatically creates preview deployments for easy testing.</li>
          </ul>
          <p><strong>How to Use:</strong></p>
          <pre className="bg-gray-800 p-4 rounded-lg text-sm">
            <code>{`npm install -g vercel`}</code>
          </pre>
          <pre className="bg-gray-800 p-4 rounded-lg text-sm">
            <code>{`vercel login`}</code>
          </pre>
          <pre className="bg-gray-800 p-4 rounded-lg text-sm">
            <code>{`vercel`}</code>
          </pre>
        </div>

        {/* Next.js DevTools Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">2. Next.js DevTools</h2>
          <p>
            Next.js DevTools provides a Chrome extension that helps to inspect the Next.js app's behavior during development.
          </p>
          <ul className="list-inside list-disc pl-4 text-sm">
            <li><strong>Inspect React Tree:</strong> View the component tree for your pages.</li>
            <li><strong>Performance Monitoring:</strong> Inspect and analyze component rendering behavior.</li>
            <li><strong>SSR & SSG Monitoring:</strong> Helps to debug server-side rendering and static generation issues.</li>
          </ul>
          <p><strong>How to Use:</strong></p>
          <ul className="text-sm">
            <li>Install the Chrome extension from the Chrome Web Store.</li>
            <li>Open the developer tools in your browser and switch to the Next.js tab.</li>
          </ul>
        </div>

        {/* Next.js CLI Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">3. Next.js CLI (Command Line Interface)</h2>
          <p>
            Next.js CLI is the primary tool for creating, developing, and deploying Next.js applications.
          </p>
          <p><strong>Common Commands:</strong></p>
          <ul className="list-inside list-disc pl-4 text-sm">
            <li><code className="text-white">npx create-next-app</code> – Creates a new Next.js app.</li>
            <li><code className="text-white">npm run dev</code> – Starts the development server.</li>
            <li><code className="text-white">npm run build</code> – Builds the app for production.</li>
            <li><code className="text-white">npm run start</code> – Starts the app in production mode.</li>
            <li><code className="text-white">next export</code> – Exports your Next.js app as a static site.</li>
          </ul>
        </div>

        {/* Next.js Plugin for ESLint Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">4. Next.js Plugin for ESLint</h2>
          <p>
            ESLint is a popular linting tool for identifying and fixing problematic patterns in JavaScript code. Next.js provides a built-in ESLint configuration to ensure your project adheres to good coding practices.
          </p>
          <ul className="list-inside list-disc pl-4 text-sm">
            <li><strong>Code Quality Check:</strong> Helps to ensure that your Next.js project is adhering to best practices.</li>
            <li><strong>Automatic Fixing:</strong> Can automatically fix some issues by running ESLint with <code className="text-white">--fix</code>.</li>
          </ul>
          <p><strong>How to Use:</strong></p>
          <pre className="bg-gray-800 p-4 rounded-lg text-sm">
            <code>{`npm install eslint --save-dev`}</code>
          </pre>
          <pre className="bg-gray-800 p-4 rounded-lg text-sm">
            <code>{`npx next lint`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Page;
