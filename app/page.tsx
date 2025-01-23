"use client";

import { motion } from 'framer-motion';
import Header from './components/header';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen py-40 px-10 relative overflow-hidden">

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-10 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>

        <motion.div
          className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -360], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>

        {/* Title with Epic Animation */}
        <motion.h1
          className="text-7xl md:text-9xl font-extrabold tracking-wide leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Build with <motion.span className="text-blue-500" whileHover={{ scale: 1.2 }}>ZYNK UI</motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-400 mt-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Create stunning, responsive, and modern web applications effortlessly with
          <motion.span className="text-blue-500 font-semibold" whileHover={{ color: "#3b82f6" }}> Next.js</motion.span>,
          Tailwind CSS, and Framer Motion.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-10 flex gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-xl font-semibold shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Get Started 🚀
          </motion.button>
          <motion.button
            className="px-10 py-4 border border-gray-600 rounded-lg text-xl font-semibold hover:border-white hover:bg-white hover:text-black transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Learn More 📘
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-10 border-t border-gray-800 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.p
          className="text-gray-400"
          whileHover={{ color: "#ffffff" }}
        >
          © {new Date().getFullYear()} Zynk UI. All rights reserved.
        </motion.p>
        <motion.div className="mt-4 flex justify-center gap-6">
          <motion.a
            href="https://github.com"
            className="text-gray-400 hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Twitter
          </motion.a>
          <motion.a
            href="https://discord.com"
            className="text-gray-400 hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Discord
          </motion.a>
        </motion.div>
      </motion.footer>
    </div>
  );
}
