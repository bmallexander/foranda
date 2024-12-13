import React from 'react';
import { MessageSquare } from 'lucide-react';
import { VouchCard } from '../components/VouchCard';
import { vouches } from '../data/vouches';

export const Vouches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-green-400 mr-2" />
            <h1 className="text-4xl font-bold">Customer Vouches</h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our community members are saying about their experience with Foranda
          </p>
        </div>

        <div className="grid gap-6">
          {vouches.map((vouch) => (
            <VouchCard key={vouch.id} {...vouch} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-900/20 rounded-xl p-8 border border-green-500/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-gray-300 mb-6">
              Are you a satisfied customer? Join our Discord server and share your success story in the #vouches channel!
            </p>
            <a
              href="https://discord.gg/foranda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};