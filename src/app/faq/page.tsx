import React from 'react';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-light text-white mb-6">Frequently Asked Questions</h1>
        <div className="text-purple-200 text-lg leading-relaxed mb-6">
          <h2 className="text-xl text-white mb-4">What is The Gentle Garden?</h2>
          <p>The Gentle Garden is a sacred sanctuary designed to support newly awakening souls on their spiritual journey. We offer sanctuaries, guides, and practices to help seekers explore and grow.</p>
        </div>
        <div className="text-purple-200 text-lg leading-relaxed mb-6">
          <h2 className="text-xl text-white mb-4">How can I contact support?</h2>
          <p>You can reach out to us at <span className="text-purple-300">support@gentlegarden.org</span> for any questions or assistance.</p>
        </div>
        <div className="text-purple-200 text-lg leading-relaxed mb-6">
          <h2 className="text-xl text-white mb-4">What are sanctuaries?</h2>
          <p>Sanctuaries are themed spaces within The Gentle Garden that focus on specific practices and wisdom streams, such as Healing, Light Work, and Communion.</p>
        </div>
      </div>
    </div>
  );
}