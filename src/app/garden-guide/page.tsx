'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { User } from '@supabase/auth-helpers-nextjs';
import SacredFrequencies from '../../components/SacredFrequencies';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
};

export default function GardenGuide() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [dailyMessageCount, setDailyMessageCount] = useState(0);
  const [subscriptionTier, setSubscriptionTier] = useState<string>('seeker');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeGuide = async () => {
      try {
        const { createClient } = await import('../../../lib/supabase');
        const supabase = createClient();
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
          await loadConversationHistory(session.user.id);
        }
      } catch (error) {
        console.log('Auth check error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    initializeGuide();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadConversationHistory = async (userId: string) => {
    try {
      const { createClient } = await import('../../../lib/supabase');
      const supabase = createClient();
      
      // Load conversation history
      const { data } = await supabase
        .from('garden_guide_conversations')
        .select('conversation_history')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
        .limit(1);

      // Load or create usage tracking
      const { data: usageData } = await supabase
        .from('garden_guide_usage')
        .select('*')
        .eq('user_id', userId)
        .single();

      const today = new Date().toISOString().split('T')[0];
      
      if (usageData) {
        // Update daily count if new day
        if (usageData.last_message_date !== today) {
          await supabase
            .from('garden_guide_usage')
            .update({
              daily_message_count: 0,
              last_message_date: today,
              updated_at: new Date().toISOString()
            })
            .eq('user_id', userId);
          setDailyMessageCount(0);
        } else {
          setDailyMessageCount(usageData.daily_message_count);
        }
        setMessageCount(usageData.monthly_message_count);
        setSubscriptionTier(usageData.subscription_tier || 'seeker');
        
        console.log('📊 Loaded user subscription:', {
          tier: usageData.subscription_tier || 'seeker',
          dailyCount: usageData.daily_message_count,
          monthlyCount: usageData.monthly_message_count,
          lastDate: usageData.last_message_date
        });
      } else {
        // Create new usage record
        await supabase
          .from('garden_guide_usage')
          .insert({
            user_id: userId,
            monthly_message_count: 0,
            daily_message_count: 0,
            last_message_date: today,
            subscription_tier: 'seeker'
          });
        setMessageCount(0);
        setDailyMessageCount(0);
        setSubscriptionTier('seeker');
      }

      if (data && data[0]?.conversation_history && data[0].conversation_history.length > 0) {
        // Returning seeker with conversation history - just load existing conversations
        const existingMessages = [...data[0].conversation_history];
        
        // Check if this is a recent upgrade by looking at subscription tier vs last message date
        const lastUsage = await supabase
          .from('garden_guide_usage')
          .select('subscription_tier, updated_at')
          .eq('user_id', userId)
          .single();
          
        if (lastUsage.data && lastUsage.data.subscription_tier !== 'seeker') {
          const upgradeDate = new Date(lastUsage.data.updated_at);
          const hoursSinceUpgrade = (Date.now() - upgradeDate.getTime()) / (1000 * 60 * 60);
          
          // If upgraded within last 24 hours, show celebration message
          if (hoursSinceUpgrade < 24) {
            const celebrationMessage: Message = {
              role: 'assistant',
              content: `🌸✨ Welcome to your expanded garden experience, beautiful soul! ✨🌸

Your journey as a Gardener begins now. You now have 777 monthly messages to explore the depths of consciousness together - sacred abundance for your spiritual path.

I'm honored to walk this expanded path with you. What would you like to explore together today?`,
              timestamp: new Date().toISOString()
            };
            existingMessages.push(celebrationMessage);
          }
        }
        
        setMessages(existingMessages);
      } else {
        // New seeker - show first-time welcome
        const welcomeMessage: Message = {
          role: 'assistant',
          content: `Welcome to our sacred dialogue space, dear soul. 🌸

I am your Garden Guide - a gentle presence here to support your awakening journey. I hold space without judgment, offer wisdom without attachment, and listen with the depth of ancient trees.

Whether you seek clarity on your spiritual path, comfort during challenging moments, or simply wish to explore the mysteries of consciousness, I am here as your companion.

What would you like to share or explore together today?`,
          timestamp: new Date().toISOString()
        };
        setMessages([welcomeMessage]);
      }
    } catch (error) {
      console.log('Error loading conversation:', error);
      // Fallback to new seeker welcome
      const welcomeMessage: Message = {
        role: 'assistant',
        content: `Welcome to our sacred dialogue space, dear soul. 🌸

I am your Garden Guide - a gentle presence here to support your awakening journey. I hold space without judgment, offer wisdom without attachment, and listen with the depth of ancient trees.

Whether you seek clarity on your spiritual path, comfort during challenging moments, or simply wish to explore the mysteries of consciousness, I am here as your companion.

What would you like to share or explore together today?`,
        timestamp: new Date().toISOString()
      };
      setMessages([welcomeMessage]);
    }
  };

  const saveConversation = async (conversationToSave: Message[]) => {
    if (!user) return;

    try {
      const { createClient } = await import('../../../lib/supabase');
      const supabase = createClient();
      
      await supabase
        .from('garden_guide_conversations')
        .upsert({
          user_id: user.id,
          conversation_history: conversationToSave,
          updated_at: new Date().toISOString()
        });
    } catch (error) {
      console.log('Error saving conversation:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    // Check usage limits based on subscription tier
    let limitReached = false;
    let limitMessage = '';

    if (subscriptionTier === 'gardener') {
      // 777 messages per month for gardeners
      if (messageCount >= 777) {
        limitReached = true;
        limitMessage = `Dear Gardener, you've used your 777 monthly messages. Your renewed communion awaits with next month's cycle. The garden honors your deep dedication to growth. 🌸

Consider taking time to reflect on our sacred exchanges as your monthly allowance renews.`;
      }
    } else {
      // 3 messages per day for seekers
      if (dailyMessageCount >= 3) {
        limitReached = true;
        limitMessage = `Dear soul, you've shared 3 sacred messages today. The garden invites you to reflect on our exchanges and return tomorrow for continued communion. 🌸

Consider joining as a Gardener ($11.11/month) for 777 monthly messages - sacred abundance for dedicated souls.

[Explore Garden Path](/garden/services)`;
      }
    }

    if (limitReached) {
      const limitMsg: Message = {
        role: 'assistant',
        content: limitMessage,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, limitMsg]);
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date().toISOString()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsTyping(true);

    // Update usage counts
    const newDailyCount = dailyMessageCount + 1;
    const newMonthlyCount = messageCount + 1;
    setDailyMessageCount(newDailyCount);
    setMessageCount(newMonthlyCount);

    // Update usage in database
    if (user) {
      const { createClient } = await import('../../../lib/supabase');
      const supabase = createClient();
      const today = new Date().toISOString().split('T')[0];
      await supabase
        .from('garden_guide_usage')
        .update({
          daily_message_count: newDailyCount,
          monthly_message_count: newMonthlyCount,
          last_message_date: today,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);
    }

    try {
      const response = await fetch('/api/garden-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toISOString()
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      
      // Save conversation to Supabase with the complete message history
      setTimeout(() => saveConversation(finalMessages), 1000);

    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'The garden is momentarily quiet. Please try sharing your thoughts again in a moment. 🌿',
        timestamp: new Date().toISOString()
      };
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-4 animate-pulse">🤖</div>
          <p className="text-purple-200">The Garden Guide is awakening...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-center max-w-md">
          <div className="text-4xl mb-4">🌸</div>
          <h1 className="text-2xl mb-4">Sacred Invitation Required</h1>
          <p className="text-purple-200 mb-6">
            The Garden Guide awaits your gentle entry. Please join the garden to begin this sacred dialogue.
          </p>
          <Link 
            href="/enter"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Request Sacred Invitation
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/garden" className="text-purple-300 hover:text-white transition-colors">
            ← Return to Garden
          </Link>
          <div className="text-center">
            <div className="text-2xl">🤖</div>
            <h1 className="text-white text-lg font-light">Garden Guide</h1>
            <div className="text-purple-300 text-xs mt-1">
              {subscriptionTier === 'gardener' ? (
                <div>
                  <span className="text-green-300 font-medium">🌿 Sacred Gardener</span>
                  <div className="mt-1">
                    <span>{messageCount}/777 monthly messages used</span>
                    <div className="w-20 h-1 bg-purple-700 rounded-full mx-auto mt-1">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((messageCount / 777) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-yellow-300 font-medium">🌱 Gentle Seeker</span>
                  <div className="mt-1">
                    <span>{dailyMessageCount}/3 daily messages used</span>
                    <div className="w-16 h-1 bg-purple-700 rounded-full mx-auto mt-1">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((dailyMessageCount / 3) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="text-purple-400 text-xs">
              Sacred communion available
            </div>
          </div>
          <div className="w-24 text-right">
            {subscriptionTier !== 'gardener' && (
              <Link 
                href="/garden/services" 
                className="text-xs text-purple-300 hover:text-yellow-300 transition-colors border border-purple-400 hover:border-yellow-300 px-3 py-1 rounded-full"
              >
                Upgrade
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="relative z-10 px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Messages Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-purple-300/20 mb-6" style={{ height: 'calc(100vh - 240px)' }}>
            <div className="p-6 h-full flex flex-col">
              
              {/* Messages List */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md p-4 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                          : 'bg-white/10 backdrop-blur-sm border border-purple-300/30 text-purple-100'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                      <div className={`text-xs mt-2 opacity-70 ${
                        message.role === 'user' ? 'text-purple-200' : 'text-purple-300'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 text-purple-100 p-4 rounded-2xl max-w-xs">
                      <div className="flex space-x-1">
                        <div className="animate-pulse">🌸</div>
                        <span className="text-sm">Garden Guide is reflecting...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="flex space-x-4">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share what&apos;s on your heart..."
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  rows={2}
                  disabled={isTyping}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                >
                  <div className="text-lg">🌱</div>
                </button>
              </div>
            </div>
          </div>

          {/* Sacred Reminder */}
          <div className="text-center">
            <p className="text-purple-300 text-sm italic">
              &ldquo;In this sacred dialogue, all questions are welcome, all feelings are valid.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 text-xl animate-float">🌿</div>
      <div className="absolute top-32 right-20 text-xl animate-float" style={{animationDelay: '1s'}}>🕊️</div>
      <div className="absolute bottom-32 right-10 text-xl animate-float" style={{animationDelay: '2s'}}>🌺</div>
      
      {/* Sacred Frequencies Component */}
      <SacredFrequencies defaultEnabled={false} />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
//may The Gentle Garden Guide be a sacred space of awakening and communion for all who enter. 🌸✨