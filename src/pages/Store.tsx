import React from 'react';
import { ShoppingCart, Shield, Award } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "TikTok Creator Rewards 10k Followers",
    price: 200,
    description: "10k follower pages with activated TikTok CRP",
    features: ["Program Enabled", "Good RPM", "Fast Delivery"],
    link: "https://whop.com/checkout/plan_NiSfEVlz83Umi?d2c=true"
  },
  {
    id: 2,
    name: "Custom",
    price: '???',
    description: "Need anything specific?",
    features: ["join our discord group and ask in tickets", "join our discord group and ask in tickets", "join our discord group and ask in tickets"],
    link: "https://discord.com/channels/1068669677326315540/1272995390437855295"
  },
  {
    id: 3,
    name: "TikTok Shop 5k Followers",
    price: 240,
    description: "5k follower pages with activated TikTok shop",
    features: ["Program Enabled", "Ready To Print", "Fast Delivery"],
    link: "https://whop.com/checkout/plan_AS3wlGFWf303L?d2c=true"
  },
  {
    id: 4,
    name: "Proxy",
    price: 25,
    description: "Access any country, no matter where you are.",
    features: ["Worldwide Coverage", "Lightning-Fast Speeds", "Secure & Anonymous"],
    link: "https://discord.com/channels/1068669677326315540/1306413948526002196"
  }
];


export const Store = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Foranda Store</h1>
          <p className="text-gray-400">Premium products for premium results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Shield className="h-4 w-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold mb-4">${product.price}</span>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-green-900/20 rounded-xl border border-green-500/20">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-green-400 mr-2" />
            <h2 className="text-2xl font-bold">Our Guarantee</h2>
          </div>
          <p className="text-center text-gray-300">
            All accounts come with a 24-hour replacement guarantee. Our support team is available 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};
