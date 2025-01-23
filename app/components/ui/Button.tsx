import { useState } from 'react';
import { motion } from 'framer-motion';

const Button = () => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

    const codeSnippet = `<motion.button
  className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 10 }}
>
  Click Me
</motion.button>`;

    return (
        <div>
            <h2 className="text-4xl font-bold">Button Component</h2>
            <p className="text-gray-400 mt-2">A simple animated button with Framer Motion effects.</p>

            {/* Tabs for Preview and Code */}
            <div className="mt-8 flex gap-4 border-b border-gray-800 pb-2">
                <button
                    className={`px-4 py-2 rounded ${activeTab === 'preview' ? 'bg-gray-700 text-white' : 'text-gray-400'
                        }`}
                    onClick={() => setActiveTab('preview')}
                >
                    Preview
                </button>
                <button
                    className={`px-4 py-2 rounded ${activeTab === 'code' ? 'bg-gray-700 text-white' : 'text-gray-400'
                        }`}
                    onClick={() => setActiveTab('code')}
                >
                    Code
                </button>
            </div>

            {/* Content based on tab selection */}
            <div className="mt-6 p-10 border border-gray-700 rounded bg-black">
                {activeTab === 'preview' ? (
                    <motion.button
                        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        Click Me
                    </motion.button>
                ) : (
                    <pre className="bg-zinc-900 p-4 rounded text-gray-300 overflow-x-auto">
                        {codeSnippet}
                    </pre>
                )}
            </div>

            {/* Guide to Add */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">Guide to Add</h3>
                <pre className="bg-gray-800 p-4 rounded text-gray-300 overflow-x-auto">
                    {`import Button from '@/components/ui/Button';\n\n<Button />`}
                </pre>
            </div>
        </div>
    );
};

export default Button;
