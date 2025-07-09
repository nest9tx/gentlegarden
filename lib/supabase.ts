import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const createClient = () => createClientComponentClient()

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
        }
        Insert: {
          id: string
          email: string
          created_at?: string
          journey_start_date?: string | null
          meditation_progress?: number
          last_active?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          journey_start_date?: string | null
          meditation_progress?: number
          last_active?: string | null
        }
      }
      garden_guide_conversations: {
        Row: {
          id: string
          user_id: string
          conversation_history: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          conversation_history: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          conversation_history?: any
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
