"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CommandLine = () => {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [copied, setCopied] = useState(false);



    const codeSnippet = `<aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
  <div className="flex justify-between items-center">
    <div className="flex space-x-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <p className="text-sm">bash</p>
  </div>
  <div className="mt-4">
    <p className="text-green-400">$ npm install next</p>
    <p className="text-white">+ next@10.2.3</p>
    <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
    <p className="text-green-400">$</p>
  </div>
</aside>`;

    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white text-start">Command Line Component</h2>
            <p className="text-gray-400 mt-2 text-start">
                A stylish command line interface simulation for showcasing terminal commands.
            </p>

            {/* Tabs for Preview and Code */}
            <div className="mt-8 flex gap-4 border-b border-gray-800 pb-2">
                <button
                    className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === "preview" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                        }`}
                    onClick={() => setActiveTab("preview")}
                >
                    Preview
                </button>
                <button
                    className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === "code" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                        }`}
                    onClick={() => setActiveTab("code")}
                >
                    Code
                </button>
            </div>

            {/* Preview or Code Section */}
            <div className="mt-6 p-6 border border-gray-700 rounded-lg bg-black h-[500px] w-full relative">
                {activeTab === "preview" ? (
                    <aside className="bg-zinc-900 text-white p-6 rounded-lg w-full max-w-lg font-mono">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <p className="text-sm">bash</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-green-400">$ npm install next</p>
                            <p className="text-white">+ next@10.2.3</p>
                            <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
                            <p className="text-green-400">$</p>
                        </div>
                    </aside>
                ) : (
                    <div className="relative">
                        <pre className="bg-zinc-900 p-4  rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                            {codeSnippet}
                        </pre>
                        <CopyToClipboard text={codeSnippet} onCopy={() => setCopied(true)}>
                            <button className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition-all">
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </CopyToClipboard>
                    </div>
                )}
            </div>

            {/* Guide to Add */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold text-white text-start">Guide to Add</h3>
                <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {`import CommandLine from '@/components/ui/CommandLine';\n\n<CommandLine />`}
                </pre>
            </div>
        </div>
    );
};

export default CommandLine;
