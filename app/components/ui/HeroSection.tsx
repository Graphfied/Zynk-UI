import { useState } from 'react';
import { motion } from 'framer-motion';
import CopyToClipboard from 'react-copy-to-clipboard';
import Image from 'next/image';

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
    const [copied, setCopied] = useState(false);

    const codeSnippet = `<section className="flex flex-col md:flex-row items-center justify-between py-20 px-10">
  <div className="max-w-2xl text-start">
    <motion.h1 
      className="text-5xl font-bold text-white leading-tight"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to Zynk UI
    </motion.h1>
    <motion.p 
      className="mt-6 text-gray-400 text-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      Build stunning, responsive, and modern web applications with ease using our powerful components.
    </motion.p>
    <motion.div 
      className="mt-8 flex space-x-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500">
        Get Started
      </button>
      <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-white">
        Learn More
      </button>
    </motion.div>
  </div>
  <motion.div 
    className="mt-12 md:mt-0"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <Image 
      src="/hero-image.png" 
      alt="Hero Illustration" 
      width={600} 
      height={400} 
      className="rounded-lg shadow-lg"
    />
  </motion.div>
</section>`;

    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white text-start">Hero Section Component</h2>
            <p className="text-gray-400 mt-2 text-start">
                A fully responsive hero section with animated text and call-to-action buttons.
            </p>

            {/* Tabs for Preview and Code */}
            <div className="mt-8 flex gap-4 border-b border-gray-800 pb-2">
                <button
                    className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === 'preview' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                    onClick={() => setActiveTab('preview')}
                >
                    Preview
                </button>
                <button
                    className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === 'code' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                    onClick={() => setActiveTab('code')}
                >
                    Code
                </button>
            </div>

            {/* Preview or Code Section */}
            <div className="mt-6 p-6 border border-gray-700 rounded-lg bg-black">
                {activeTab === 'preview' ? (
                    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-10">
                        <div className="max-w-2xl text-start">
                            <motion.h1 className="text-5xl font-bold text-white leading-tight">Welcome to Zynk UI</motion.h1>
                            <motion.p className="mt-6 text-gray-400 text-lg">
                                Build stunning, responsive, and modern web applications with ease.
                            </motion.p>
                            <motion.div className="mt-8 flex space-x-4">
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500">
                                    Get Started
                                </button>
                                <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-white">
                                    Learn More
                                </button>
                            </motion.div>
                        </div>
                        <motion.div className="mt-12 md:mt-0">
                            <Image
                                src="/project3.png"
                                alt="Hero Illustration"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </section>
                ) : (
                    <div className="relative">
                        <pre className="bg-zinc-900 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                            {codeSnippet}
                        </pre>
                        <CopyToClipboard text={codeSnippet} onCopy={() => setCopied(true)}>
                            <button className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition-all">
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </CopyToClipboard>
                    </div>
                )}
            </div>

            {/* Guide to Add */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold text-white text-start">Guide to Add</h3>
                <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {`import HeroSection from '@/components/ui/HeroSection';\n\n<HeroSection />`}
                </pre>
            </div>
        </div>
    );
};

export default HeroSection;
