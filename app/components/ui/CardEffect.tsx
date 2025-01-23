import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CopyToClipboard from 'react-copy-to-clipboard';

const CardEffect = () => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
    const [copied, setCopied] = useState(false);

    const codeSnippet = `<motion.div
  className="max-w-sm border border-gray-700 rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 200, damping: 10 }}
>
  <img src="/card-image.jpg" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
  <div className="p-6">
    <h3 className="text-xl text-white font-semibold">Beautiful Card</h3>
    <p className="text-gray-400 mt-2">This is an example of an animated content card using Framer Motion.</p>
  </div>
</motion.div>`;

    return (
        <div className=" mx-auto">
            <h2 className="text-4xl font-bold text-white">Card Effect Component</h2>
            <p className="text-gray-400 mt-2">
                An animated content card with an image and description using Framer Motion.
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
                    <motion.div
                        className="max-w-sm border  border-gray-700 rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        <Image
                            src="https://imgcdn.stablediffusionweb.com/2024/12/3/40412e1e-1190-423d-b0ac-6ff59568ff6a.jpg"
                            alt="Card Image"
                            width={200}
                            height={400}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white">Beautiful Card</h3>
                            <p className="text-gray-400 mt-2">
                                This is an example of an animated content card using Framer Motion.
                            </p>
                        </div>
                    </motion.div>
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
                <h3 className="text-2xl font-semibold text-white">Guide to Add</h3>
                <pre className="bg-zinc-900 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {`import CardEffect from '@/components/ui/CardEffect';\n\n<CardEffect />`}
                </pre>
            </div>
        </div>
    );
};

export default CardEffect;
