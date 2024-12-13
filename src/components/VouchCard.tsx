import React from 'react';
import { Star, Check } from 'lucide-react';

interface VouchProps {
  name: string;
  service: string;
  date: string;
  rating: number;
  verified: boolean;
  content: string;
  avatar: string;
}

export const VouchCard: React.FC<VouchProps> = ({
  name,
  service,
  date,
  rating,
  verified,
  content,
  avatar,
}) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{name}</h3>
                {verified && (
                  <span className="flex items-center text-green-400 text-sm">
                    <Check className="w-4 h-4 mr-1" />
                    Verified Purchase
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400">{service}</p>
            </div>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
    </div>
  );
};