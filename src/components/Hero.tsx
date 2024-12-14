import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black to-green-900 text-white flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617957796155-72d8717ac882?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      
      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
          Master TikTok With Foranda
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
         Join the fastest-growing TikTok community! Learn how to print money, buy and sell accounts, network with like-minded creators, and relax while you grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://discord.gg/M6kWEwEurZ" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg bg-green-600 hover:bg-green-700 transition-colors">
            Join Our Discord
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="https://joinforanda.com/store" className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg bg-gray-800 hover:bg-gray-900 transition-colors">
            View Store
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};