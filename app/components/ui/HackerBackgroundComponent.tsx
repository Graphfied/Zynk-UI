import { useState } from 'react';
import HackerBackground from '../ui/HackerBackground'

const HackerBackgroundComponent = () => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

    const codeSnippet = `Code Coming Soon`;

    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white text-start">Hacker Background Component</h2>
            <p className="text-gray-400 mt-2 text-start">
                A cyber-themed hacker effect background with customizable color, font size, and speed.
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
            <div className="mt-6 p-6 border border-gray-700 rounded-lg bg-black h-[500px] w-full relative">
                {activeTab === 'preview' ? (
                    <div className="relative w-full h-full rounded-md overflow-hidden">
                        <HackerBackground color="#0F0" fontSize={16} speed={2} className="absolute" />
                    </div>
                ) : (
                    <div className="relative">
                        <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                            {codeSnippet}
                        </pre>
                    </div>
                )}
            </div>

            {/* Guide to Add */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold text-white text-start">Guide to Add</h3>
                <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {`import HackerBackground from '@/components/ui/HackerBackground';\n\n<HackerBackground color="#0F0" fontSize={16} speed={2} className="z-0" />`}
                </pre>
            </div>
        </div>
    );
};

export default HackerBackgroundComponent;
