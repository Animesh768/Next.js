'use client';

import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950 via-gray-950 to-green-950 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-opacity-90 rounded-lg shadow-lg text-white text-lg">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-center">Next.js Components Overview</h1>
          </div>

          {/* Pages Section */}
          <div>
            <h2 className="text-2xl font-bold">1. Pages</h2>
            <p>
              In Next.js, a page is a React component that is mapped to a route based on its file name in the <code className="bg-pink-400  text-white px-2 py-1 rounded">pages</code> directory.
            </p>
            <ul className="list-inside list-disc pl-4">
              <li><code className="text-white">pages/index.js</code> will be mapped to the root route <code className="text-white">/</code>.</li>
              <li><code className="text-white">pages/about.js</code> will be mapped to <code className="text-white">/about</code>.</li>
              <li>Dynamic routes can be created using square brackets, such as <code className="text-white">pages/[id].js</code> for routes like <code className="text-white">/1</code>, <code className="text-white">/2</code>, etc.</li>
            </ul>
          </div>

          {/* Components Section */}
          <div>
            <h2 className="text-2xl font-bold">2. Components</h2>
            <p>
              Components in Next.js are reusable UI pieces used to build various elements of the application.
            </p>
            <p>
              Next.js primarily uses functional components with React hooks.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
              <code>
                {`const Header = () => {
  return <header>Welcome to Next.js</header>;
};`}
              </code>
            </pre>
            <p>
              Components are typically placed in a <code className="text-white">components/</code> folder for better organization.
            </p>
          </div>

          {/* Layouts Section */}
          <div>
            <h2 className="text-2xl font-bold">3. Layouts</h2>
            <p>
              Layouts are components used to wrap pages and maintain a consistent structure, such as a header, footer, and sidebar, across multiple pages.
            </p>
            <p>
              You can create custom layouts by wrapping the content of your page with a layout component.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
              <code>
                {`const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};`}
              </code>
            </pre>
            <p>
              You can use this layout in any page component like so:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
              <code>
                {`import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>This is the About page</p>
    </Layout>
  );
};`}
              </code>
            </pre>
          </div>

          {/* API Routes Section */}
          <div>
            <h2 className="text-2xl font-bold">4. API Routes</h2>
            <p>
              Next.js allows you to create API routes inside the <code className="text-white">pages/api/</code> directory. These are endpoints that can be accessed via HTTP methods like GET, POST, etc.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
              <code>
                {`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, Next.js!' });
}`}
              </code>
            </pre>
            <p>
              You can access these API routes from the client side or from other parts of your application like this:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
              <code>
                {`fetch('/api/hello')
  .then(response => response.json())
  .then(data => console.log(data.message));`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
