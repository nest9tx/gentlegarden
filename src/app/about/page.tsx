import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-light text-white mb-6">About Us</h1>
        <p className="text-purple-200 text-lg leading-relaxed mb-6">
          Welcome to The Gentle Garden, a sacred sanctuary for newly awakening souls. Our mission is to provide a nurturing space where seekers can explore spiritual practices, connect with wisdom, and find gentle guidance on their journey.
        </p>
        <p className="text-purple-200 text-lg leading-relaxed mb-6">
          We believe every soul is a seed waiting for the perfect moment to bloom. Through our sanctuaries, guides, and community, we aim to offer the gentle soil and sunlight needed for growth and remembrance.
        </p>
        <p className="text-purple-300 text-sm italic">Contact us: support@gentlegarden.org</p>
      </div>
    </div>
  );
}