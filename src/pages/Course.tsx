import React from 'react';
import { BookOpen, GraduationCap, DollarSign } from 'lucide-react';

export const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Foranda Grow</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from the best with our expertly crafted courses designed to help you achieve your goals.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold">TikTok Mastery</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Master the art of TikTok growth and content creation.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• In-depth strategies for TikTok growth</li>
              <li>• Tips for viral content</li>
              <li>• Engaging content templates</li>
            </ul>

          </div>

          {/* Course 2 (Middle) */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <DollarSign className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold">Monetizing TikTok</h2>
            </div>
            <p className="text-gray-300 mb-4">
            Learn how to monetize your TikTok account.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Monetize maxing</li>
              <li>• Grow  a brand</li>
              <li>• Print with TikTok Shop</li>
              <li>• Print with TikTok Crp</li>
            </ul>

          </div>

          {/* Course 3 (Right side) */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold">Content Creation 101</h2>
            </div>
            <p className="text-gray-300 mb-4">
            A full on guide on how to create produce and win.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Video editing essentials</li>
              <li>• Copywriting essentials</li>
              <li>• Business essentials</li>
              <li>• tools and AI</li>
            </ul>

          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="https://joinforanda.com/vouches"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
          >
            Read Our Vouches
          </a>
        </div>
      </div>
    </div>
  );
};
