import React from 'react';
import { Sparkles, Users, TrendingUp, BookOpen } from 'lucide-react';

export const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Foranda Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
        From beginner to pro, we offer comprehensive TikTok growth services to skyrocket your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold">TikTok Editing</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Get Edited videos ready to post.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Professional editing</li>
              <li>• Creative enhancements</li>
              <li>• Polished for perfection</li>
              <li>• Unlimited revisions</li>
            </ul>
            <a href="https://discord.com/channels/1068669677326315540/1266486638708654161"><button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Buy
            </button></a>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold">Scratch</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Perfect words, flawless delivery.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Professional Editing</li>
              <li>• Creative Script Development</li>
              <li>• Engaging Storytelling</li>
              <li>• Unlimited Revisions</li>
            </ul>
            <a href="https://discord.com/channels/1068669677326315540/1266486638708654161 "><button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Buy
            </button></a>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold">Copywriting</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Get video scripts for your videos.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Customized Video Scripts</li>
              <li>• Unlimited Revisions</li>
              <li>• SEO-friendly content</li>
              <li>• Priority Discord Support</li>
            </ul>
            <a href="https://discord.com/channels/1068669677326315540/1266486638708654161"><button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Buy
            </button></a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="https://discord.gg/M6kWEwEurZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
          >
            Join Discord to Get Started
          </a>
        </div>
      </div>
    </div>
  );
};
