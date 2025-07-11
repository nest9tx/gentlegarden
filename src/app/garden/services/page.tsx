'use client';

import Link from 'next/link';

export default function ServicesPage() {

  const subscriptionTiers = [
    {
      id: 'gardener',
      name: 'Gardener',
      price: '$7/month',
      description: 'Enhanced garden cultivation for dedicated seekers',
      stripeDescription: 'Monthly subscription for spiritual seekers ready to deepen their practice. Includes 77 monthly Garden Guide messages, priority access to new content, exclusive intention library, and enhanced personal garden features. Cancel anytime.',
      imagePrompt: 'Peaceful garden scene with a person tending to flourishing plants and flowers, soft morning light filtering through leaves, representing spiritual growth and daily cultivation, watercolor style, serene and nurturing atmosphere',
      features: [
        '77 monthly Garden Guide messages',
        'Priority access to new sacred pathways',
        'Exclusive intention library with deeper contemplations',
        'Early access to premium content',
        'Enhanced personal garden features'
      ],
      ideal: 'Perfect for souls ready to deepen their daily spiritual practice',
      checkoutUrl: 'https://buy.stripe.com/prod_Sf3xDEqrTHSDV9'
    },
    {
      id: 'guardian',
      name: 'Guardian',
      price: '$15/month',
      description: 'Unlimited communion and access to personal sacred services',
      stripeDescription: 'Premium monthly subscription for souls seeking unlimited spiritual guidance. Includes unlimited Garden Guide communion, all Gardener benefits, direct access to personal sacred services booking, exclusive Guardian content, and priority support. Cancel anytime.',
      imagePrompt: 'Majestic ancient tree with golden light radiating from its center, representing wisdom and unlimited growth, surrounded by sacred geometry patterns, ethereal and luminous atmosphere, digital art style with soft glowing effects',
      features: [
        'Unlimited Garden Guide communion',
        'All Gardener benefits included',
        'Direct access to personal sacred services booking',
        'Exclusive Guardian-only content and features',
        'Priority support and guidance'
      ],
      ideal: 'For awakening souls seeking unlimited guidance and personal mentoring',
      checkoutUrl: 'https://buy.stripe.com/prod_Sf3zrRsUDYJ8E8'
    }
  ];

  const personalServices = [
    {
      id: 'mentoring',
      name: 'One-on-One Mentoring Session',
      price: '$77',
      duration: '60 minutes',
      description: 'Sacred guidance communion for personalized awakening pathway exploration',
      stripeDescription: 'One-time 60-minute personal mentoring session with deep spiritual guidance. Includes personalized pathway exploration, integration support, custom practices, and follow-up resources. A sacred space for your unique awakening journey.',
      imagePrompt: 'Intimate meditation space with two cushions facing each other, soft candlelight, crystals and sacred objects, representing deep communion and spiritual mentoring, warm golden tones, peaceful and sacred atmosphere',
      whatToExpect: [
        'Deep exploration of your current spiritual journey',
        'Personalized guidance for your awakening pathway',
        'Integration support for spiritual experiences',
        'Custom practices and recommendations',
        'Follow-up resources for continued growth'
      ],
      ideal: 'Souls seeking personalized guidance through spiritual transitions',
      checkoutUrl: 'https://buy.stripe.com/prod_Sf45eUeDiPGJQV'
    },
    {
      id: 'akashic',
      name: 'Akashic Deep Dive Reading',
      price: '$111',
      duration: '90 minutes',
      description: 'Sacred record exploration to illuminate soul purpose and pathway',
      stripeDescription: 'Comprehensive 90-minute Akashic Records reading to explore your soul\'s purpose and patterns. Includes past life insights, karmic healing guidance, soul mission clarity, and written summary for ongoing reflection.',
      imagePrompt: 'Ethereal library of light with floating books and scrolls, cosmic backdrop with stars and galaxies, representing the Akashic Records, mystical purple and gold colors, divine and otherworldly atmosphere',
      whatToExpect: [
        'Accessing your Akashic records with permission',
        'Soul purpose and mission exploration',
        'Past life patterns affecting current journey',
        'Guidance for releasing karmic blocks',
        'Written summary for ongoing reflection'
      ],
      ideal: 'Seekers ready to understand their soul\'s deeper purpose and patterns',
      checkoutUrl: 'https://buy.stripe.com/prod_Sf47Q5NLADWDj0'
    },
    {
      id: 'energy',
      name: 'Energy Alignment Session',
      price: '$55',
      duration: '45 minutes',
      description: 'Frequency-based healing work for chakra alignment and clearing',
      stripeDescription: '45-minute energy healing session focused on chakra alignment and energetic clearing. Includes comprehensive energy assessment, frequency healing with sacred tones, and personalized recommendations for ongoing balance.',
      imagePrompt: 'Person in meditation with visible chakras glowing in rainbow colors, energy waves and healing light surrounding them, crystals and singing bowls nearby, representing energy healing and alignment, vibrant yet soothing colors',
      whatToExpect: [
        'Comprehensive energy field assessment',
        'Chakra alignment and clearing work',
        'Frequency healing with sacred tones',
        'Personalized frequency recommendations',
        'Integration practices for ongoing balance'
      ],
      ideal: 'Those feeling energetically blocked or seeking vibrational harmony',
      checkoutUrl: 'https://buy.stripe.com/prod_Sf4BD3kpXCyL17'
    },
    {
      id: 'reflection',
      name: 'Sacred Reflection Intensive',
      price: '$33',
      duration: '30 minutes',
      description: 'Guided deep reflection session for personal garden cultivation',
      stripeDescription: 'Gentle 30-minute guided reflection session perfect for beginning your conscious awakening journey. Includes structured life pattern exploration, personal intention setting, and gentle accountability framework.',
      imagePrompt: 'Serene person sitting by a calm lake with mountains in background, holding a journal, soft sunrise light reflecting on water, representing deep reflection and inner contemplation, peaceful pastels and natural tones',
      whatToExpect: [
        'Structured reflection on current life patterns',
        'Personal garden cultivation planning',
        'Custom intention and milestone creation',
        'Gentle accountability framework',
        'Resources for continued self-reflection'
      ],
      ideal: 'Souls beginning their conscious awakening journey',
      checkoutUrl: 'https://buy.stripe.com/prod_Sf4GoCy6jK0Xvu'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/garden" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors duration-200"
          >
            <span className="mr-2">←</span>
            Return to Garden
          </Link>
          
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            🌸 Sacred Services & Offerings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to our gentle offerings designed to support your unique awakening journey. 
            Each service is crafted with deep intention to honor your spiritual growth and 
            provide personalized support along your sacred path.
          </p>
        </div>

        {/* Gentle Begin Here Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-emerald-100">
          <h2 className="text-2xl font-light text-gray-800 mb-4 text-center">
            🌱 Gentle Begin Here
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-medium text-gray-700 mb-2">New to Spiritual Work?</h3>
              <p className="text-gray-600 text-sm">
                Start with our <strong>Sacred Reflection Intensive</strong> to gently explore 
                your inner landscape and set intentions for growth.
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-3">🌸</div>
              <h3 className="font-medium text-gray-700 mb-2">Seeking Deeper Practice?</h3>
              <p className="text-gray-600 text-sm">
                Consider a <strong>Gardener Subscription</strong> for enhanced daily communion 
                and exclusive tools for spiritual cultivation.
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-3">🌺</div>
              <h3 className="font-medium text-gray-700 mb-2">Ready for Transformation?</h3>
              <p className="text-gray-600 text-sm">
                Explore our <strong>Personal Sacred Services</strong> for one-on-one guidance 
                and deep healing work tailored to your journey.
              </p>
            </div>
          </div>
        </div>

        {/* Subscription Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            🌱 Garden Cultivation Subscriptions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {subscriptionTiers.map((tier) => (
              <div 
                key={tier.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light text-gray-800 mb-2">
                    🌸 {tier.name}
                  </h3>
                  <div className="text-3xl font-light text-emerald-600 mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-600 italic">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-emerald-700">
                    <strong>Ideal for:</strong> {tier.ideal}
                  </p>
                </div>

                <button 
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
                  onClick={() => window.open(tier.checkoutUrl, '_blank')}
                >
                  Choose {tier.name} Path
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Sacred Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            🔮 Personal Sacred Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {personalServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-light text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <div className="text-2xl font-light text-emerald-600 mb-1">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {service.duration}
                  </div>
                  <p className="text-gray-600 italic">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">What to Expect:</h4>
                  <div className="space-y-2">
                    {service.whatToExpect.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-emerald-500 mr-3 mt-1 text-sm">•</span>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-emerald-700">
                    <strong>Ideal for:</strong> {service.ideal}
                  </p>
                </div>

                <button 
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
                  onClick={() => window.open(service.checkoutUrl, '_blank')}
                >
                  Book This Session
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred FAQ Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
          <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">
            🌿 Sacred Questions & Gentle Guidance
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                How do I know which offering is right for me?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trust your inner knowing. If you&apos;re new to spiritual work, start with a Sacred Reflection 
                Intensive. If you&apos;re seeking daily support, consider a subscription. For specific guidance 
                or healing, explore our personal services. There&apos;s no wrong choice - only the perfect 
                next step for your journey.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                What if I&apos;m not ready for paid services?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The garden offers beautiful free pathways! Explore the Garden Guide (3 daily messages), 
                Sacred Frequencies, Personal Garden intentions, and all our &ldquo;opening soon&rdquo; spaces. 
                Paid offerings are simply additional support when you feel called to go deeper.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                How do subscriptions work with the Garden Guide?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seekers receive 3 daily messages. Gardeners enjoy 77 monthly messages (about 2-3 daily). 
                Guardians have unlimited communion. Your conversation history and personal garden remain 
                yours regardless of subscription level.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                What makes these services &ldquo;sacred&rdquo;?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each offering is approached with deep reverence for your spiritual journey. We hold 
                sacred space, honor your unique path, and provide guidance that serves your highest 
                good rather than our agenda. This is soul work, not transactional service.
              </p>
            </div>
          </div>
        </div>

        {/* Return to Garden */}
        <div className="text-center mt-12">
          <Link 
            href="/garden"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
          >
            🌸 Return to Your Garden
          </Link>
        </div>
      </div>
    </div>
  );
}
