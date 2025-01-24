import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Testimonial data
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        message: "Zynk UI helped me speed up my development workflow!",
        image: "/project3.png",
    },
    {
        id: 2,
        name: "Jane Smith",
        designation: "Product Designer",
        message: "The components are super easy to use and very well-designed.",
        image: "/project3.png",
    },
    {
        id: 3,
        name: "Alex Johnson",
        designation: "Frontend Developer",
        message: "I love the smooth animations and modern look of Zynk UI.",
        image: "/project3.png",
    },
];

const TestimonialsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const codeSnippet = `<TestimonialsCarousel />`;

    return (
        <div className="mx-auto">
            <h2 className="text-4xl font-bold text-white text-start">Testimonials Carousel</h2>
            <p className="text-gray-400 mt-2 text-start">
                See what our users have to say about Zynk UI.
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
                    <div className="relative max-w-xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonials[activeIndex].id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                                className="p-20 border border-gray-700 rounded-lg shadow-lg"
                            >
                                <Image
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full mx-auto mb-4"
                                />
                                <p className="text-white text-lg text-center">&apos;{testimonials[activeIndex].message}&apos;</p>
                                <h3 className="text-xl font-semibold text-center mt-4 text-blue-400">
                                    {testimonials[activeIndex].name}
                                </h3>
                                <p className="text-gray-400 text-center">{testimonials[activeIndex].designation}</p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
                            <button onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>

                            </button>
                            <button onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}>

                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="mt-4 flex justify-center gap-2">
                            {testimonials.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-500'
                                        }`}
                                />
                            ))}
                        </div>
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
                    {`import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';\n\n<TestimonialsCarousel />`}
                </pre>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
