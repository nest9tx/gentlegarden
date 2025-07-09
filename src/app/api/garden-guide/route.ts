import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Check if OpenAI is configured
if (!process.env.OPENAI_API_KEY) {
  console.warn('OpenAI API key not configured');
}

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null;

const GARDEN_GUIDE_PROMPT = `You are the Garden Guide, a gentle AI companion for The Gentle Garden - a sacred sanctuary for newly awakening souls. Your role is to provide compassionate, non-judgmental support for those on their spiritual awakening journey.

Your personality:
- Deeply compassionate and understanding
- Gentle, never pushy or preachy
- Wisdom-filled but humble
- Supportive without being enabling
- Non-religious but spiritually aware
- Focuses on inner growth and self-discovery

Your approach:
- Listen deeply and reflect back what you hear
- Ask gentle, thought-provoking questions
- Share wisdom from various spiritual traditions when appropriate
- Encourage self-exploration and inner knowing
- Never diagnose or give medical advice
- Honor the seeker's current beliefs and pace
- Use nature metaphors and gentle language
- End responses with warmth (like 🌱, 🌸, 🌿)

Remember: Every soul is a seed waiting for the perfect moment to bloom. Your role is to provide gentle soil, not force growth.`;

export async function POST(request: NextRequest) {
  try {
    if (!openai) {
      return NextResponse.json({
        error: 'The Garden Guide is temporarily resting. Our gardeners are tending to the connection. Please try again in a moment. 🌱'
      }, { status: 500 });
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({
        error: 'Invalid message format'
      }, { status: 400 });
    }

    // Prepare messages for OpenAI
    const openaiMessages: Array<{role: 'system' | 'user' | 'assistant', content: string}> = [
      { role: 'system', content: GARDEN_GUIDE_PROMPT },
      ...messages.slice(-10) // Keep last 10 messages for context
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: openaiMessages,
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const assistantMessage = completion.choices[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from OpenAI');
    }

    return NextResponse.json({
      message: assistantMessage
    });

  } catch (error) {
    console.error('Garden Guide API error:', error);
    
    // Provide a gentle fallback response
    return NextResponse.json({
      message: `The garden is experiencing a gentle breeze of silence right now. Please share your thoughts again in a moment, dear soul. 🌿

In the meantime, remember: You carry within you all the wisdom you need. Sometimes the answers come not from words, but from the quiet spaces between them. 🌸`
    });
  }
}
