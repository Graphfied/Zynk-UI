import { useState } from 'react';
import Image from 'next/image';

const DiscordProfileCard = () => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

    const codeSnippet = `<div className="max-w-sm bg-[#23272A] rounded-lg shadow-lg border border-gray-700 p-4">
  <div className="relative">
    <Image src="/discord-bg.png" alt="Background" width={400} height={100} className="rounded-lg" />
    <div className="absolute -bottom-8 left-4">
      <Image src="/avatar.png" alt="Profile" width={80} height={80} className="rounded-full border-4 border-[#23272A]" />
    </div>
  </div>
  <div className="mt-10 px-4">
    <h3 className="text-white text-xl font-semibold">Fatality</h3>
    <p className="text-gray-400 text-sm">.fty</p>
    <div className="flex items-center gap-2 mt-2">
      <span className="text-gray-400 text-sm">19 Mutual Friends • 15 Mutual Servers</span>
    </div>
    <div className="mt-4 flex gap-2">
      <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">DEVELOPER</span>
      <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">CFO</span>
      <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">Developer</span>
    </div>
    <div className="mt-4">
      <input type="text" className="w-full bg-[#2C2F33] text-gray-400 p-3 rounded-lg" placeholder="Message @Fatality" />
    </div>
  </div>
</div>`;

    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white text-start">Discord Profile Card</h2>
            <p className="text-gray-400 mt-2 text-start">A customizable Discord-style profile card component.</p>

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
                    <div className="max-w-sm bg-[#23272A] rounded-lg shadow-lg border border-gray-700 p-1 pb-5">
                        <div className="relative">
                            <Image src="/project3.png" alt="Background" width={400} height={100} className="rounded-lg" />
                            <div className="absolute -bottom-8 left-4">
                                <Image src="/openai.png" alt="Profile" width={100} height={100} className="rounded-full border-4 border-[#23272A]" />
                            </div>
                        </div>
                        <div className="mt-10 px-4">
                            <h3 className="text-white text-xl font-semibold">Sam Altman</h3>
                            <p className="text-gray-400 text-sm">.sam</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-gray-400 text-sm">19 Mutual Friends • 15 Mutual Servers</span>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">DEVELOPER</span>
                                <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">CTO</span>
                                <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">Developer</span>
                            </div>
                            <div className="mt-4">
                                <input type="text" className="w-full bg-[#2C2F33] text-gray-400 p-3 rounded-lg" placeholder="Message @Sam Altman" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        <pre className="bg-zinc-900 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                            {codeSnippet}
                        </pre>
                    </div>
                )}
            </div>

            {/* Guide to Add */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold text-white text-start">Guide to Add</h3>
                <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {`import DiscordProfileCard from '@/components/ui/DiscordProfileCard';\n\n<DiscordProfileCard />`}
                </pre>
            </div>
        </div>
    );
};

export default DiscordProfileCard;
