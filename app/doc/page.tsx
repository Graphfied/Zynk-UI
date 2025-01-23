"use client";

import { useState } from 'react';
import Header from '../components/header';
import dynamic from 'next/dynamic';


// Component list
const componentsList = [
    { name: 'Button', slug: 'button' },
    { name: '3D Card Effect', slug: 'card-effect' },
    { name: 'GitHub Contribution Graph', slug: 'github-graph' },
    { name: 'Hero Section', slug: 'hero-section' },
    { name: 'Testimonials Carousel', slug: 'testimonials-carousel' },
    { name: 'Discord Profile Card', slug: 'discord-profile-card' },

];

// Dynamically import components based on selection
import { ComponentType } from 'react';

const componentMapping: Record<string, ComponentType> = {
    button: dynamic(() => import('../components/ui/Button')),
    'card-effect': dynamic(() => import('../components/ui/CardEffect')),
    'github-graph': dynamic(() => import('../components/ui/GitHubGraph')),
    'hero-section': dynamic(() => import('../components/ui/HeroSection')),
    'testimonials-carousel': dynamic(() => import('../components/ui/TestimonialsCarousel')),
    'discord-profile-card': dynamic(() => import('../components/ui/DiscordProfileCard')),
};

export default function DocPage() {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const SelectedComponent = selectedComponent ? componentMapping[selectedComponent] : null;

    return (
        <div className="min-h-screen bg-black text-gray-200">
            <Header />
            <div className="flex">
                {/* Left Sidebar */}
                <aside className="w-80 border-r border-gray-800 px-12 py-10 mt-20">
                    <h1 className="text-2xl font-bold mb-6 text-start">ZYNK UI</h1>

                    <h3 className="text-gray-400 font-medium mb-7 text-start">All Components</h3>
                    <nav className="space-y-4">
                        {componentsList.map((component) => (
                            <button
                                key={component.slug}
                                onClick={() => setSelectedComponent(component.slug)}
                                className={`block text-left w-full text-gray-300 hover:text-white ${selectedComponent === component.slug ? 'text-white font-bold' : ''
                                    }`}
                            >
                                {component.name}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Right Content Section */}
                <main className="flex-1 px-40 py-10 mt-20">
                    {SelectedComponent ? (
                        <SelectedComponent />
                    ) : (
                        <div>
                            <h2 className="text-4xl font-bold text-start">Welcome to Zynk UI</h2>
                            <p className="text-gray-400 mt-4 text-start">
                                Zynk UI provides a collection of beautifully designed and easy-to-use UI components built with Next.js, Tailwind CSS, and Framer Motion.
                                Our goal is to offer developers a seamless and efficient way to create modern and responsive web applications.
                            </p>

                            <div className="mt-8">
                                <h3 className="text-2xl font-semibold text-start">Install Next.js</h3>
                                <p className="text-gray-400 mt-2 text-start">Install Next.js with Create Next App:</p>
                                <div className="bg-gray-900 p-4 rounded-lg mt-4 flex justify-between items-center">
                                    <code className="text-green-400 text-sm">npx create-next-app@latest</code>
                                    <button className="text-gray-300 hover:text-white">📋 Copy</button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-2xl font-semibold text-start">Installation Prompts</h3>
                                <p className="text-gray-400 mt-2 text-start">
                                    When you install Next.js, you will be prompted with the following options:
                                </p>
                                <div className="bg-gray-900 p-6 rounded-lg mt-4">
                                    <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                                        {`What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use \`src/\` directory? No / Yes
Would you like to use App Router? No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*`}
                                    </pre>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-2xl font-semibold text-start">Start Your App</h3>
                                <div className="bg-gray-900 p-4 rounded-lg mt-4 flex justify-between items-center">
                                    <code className="text-green-400 text-sm">cd my-app</code>
                                    <button className="text-gray-300 hover:text-white">📋 Copy</button>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg mt-2 flex justify-between items-center">
                                    <code className="text-green-400 text-sm">npm run dev</code>
                                    <button className="text-gray-300 hover:text-white">📋 Copy</button>
                                </div>
                            </div>


                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}