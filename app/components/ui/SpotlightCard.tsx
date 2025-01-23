"use client";

import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.6);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(0.6);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            className={`relative p-6 rounded-lg border text-center border-gray-700 bg-zinc-950 shadow-lg transition-all ${className}`}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
        >
            <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent)`,
                    opacity: opacity,
                    transition: "opacity 0.3s ease",
                }}
            />
            {children || <p className="text-white text-lg font-medium">Spotlight Card</p>}
        </div>
    );
};

const SpotlightCardComponent = () => {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [copied, setCopied] = useState(false);

    const codeSnippet = `<SpotlightCard className="w-80 h-40">
  <p className="text-white text-lg font-medium">Spotlight Card</p>
</SpotlightCard>`;

    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white text-start">Spotlight Card Component</h2>
            <p className="text-gray-400 mt-2 text-start">
                A card with interactive spotlight effect on hover and focus.
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
                    <SpotlightCard className="w-[400px] h-[400px]">
                        <p className="text-white text-lg font-medium">Spotlight Card</p>
                    </SpotlightCard>
                ) : (
                    <div className="relative">
                        <pre className="bg-zinc-90w0 p-4 rounded-lg text-gray-300 overflow-x-auto whitespace-pre-wrap">
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
                    {`import SpotlightCard from '@/components/ui/SpotlightCard';\n\n<SpotlightCard className="w-80 h-40">\n  <p className="text-white text-lg font-medium">Spotlight Card</p>\n</SpotlightCard>`}
                </pre>
            </div>
        </div>
    );
};

export default SpotlightCardComponent;
