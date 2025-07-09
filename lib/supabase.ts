import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const createClient = () => {
  // Check if environment variables are available
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Supabase environment variables not configured');
  }
  return createClientComponentClient();
}

// Type for conversation messages
export type ConversationMessage = {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          created_at: string
          journey_start_date: string | null
          meditation_progress: number
          last_active: string | null
          tier: 'seeker' | 'gardener' | 'guardian'
          monthly_messages_used: number
          daily_messages_used: number
          last_message_date: string | null
        }
        Insert: {
          id: string
          email: string
          created_at?: string
          journey_start_date?: string | null
          meditation_progress?: number
          last_active?: string | null
          tier?: 'seeker' | 'gardener' | 'guardian'
          monthly_messages_used?: number
          daily_messages_used?: number
          last_message_date?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          journey_start_date?: string | null
          meditation_progress?: number
          last_active?: string | null
          tier?: 'seeker' | 'gardener' | 'guardian'
          monthly_messages_used?: number
          daily_messages_used?: number
          last_message_date?: string | null
        }
      }
      garden_guide_conversations: {
        Row: {
          id: string
          user_id: string
          conversation_history: ConversationMessage[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          conversation_history: ConversationMessage[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          conversation_history?: ConversationMessage[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
