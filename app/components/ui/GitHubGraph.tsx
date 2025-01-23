import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import CopyToClipboard from 'react-copy-to-clipboard';

const GitHubGraph = () => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
    const [copied, setCopied] = useState(false);

    const username = 'm-mehdi14';

    const codeSnippet = `<GitHubCalendar 
  username="${username}" 
  blockSize={15} 
  blockMargin={5} 
  theme={{
    light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  }}
  fontSize={16}
/>`;

    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white text-start">GitHub Contribution Graph</h2>
            <p className="text-gray-400 mt-2 text-start">
                A visual representation of {username}&apos;s GitHub contributions over time.
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
                    <div className="flex justify-start items-center">
                        <GitHubCalendar
                            username={username}
                            blockSize={15}
                            blockMargin={5}
                            fontSize={16}
                            theme={{
                                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                        />
                    </div>
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
            <div className='text-gray-400 mt-10 text-start'>
                To use the GitHub Contribution Graph component, you need to install the <code>react-github-calendar</code> package. Run the following command in your terminal:
            </div>
            <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                {`npm install react-github-calendar`}
            </pre>

            {/* Guide to Add */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold text-white text-start">Guide to Add</h3>
                <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {`import GitHubGraph from '@/components/ui/GitHubGraph';\n\n<GitHubGraph />`}
                </pre>
                <div className='text-gray-400 mt-10 text-start'>
                    You will need to replace the <code>username</code> prop with your GitHub username. You can also customize the graph by changing the <code>blockSize</code>, <code>blockMargin</code>, <code>fontSize</code>, and <code>theme</code> props.
                </div>
            </div>
        </div>
    );
};

export default GitHubGraph;
