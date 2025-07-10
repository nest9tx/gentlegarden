-- Sacred Garden Guide Conversations Table
-- This table stores the conversation history for each seeker

CREATE TABLE IF NOT EXISTS garden_guide_conversations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    conversation_history JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) Policies
-- Only authenticated users can access their own conversations
ALTER TABLE garden_guide_conversations ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own conversations
CREATE POLICY "Users can view own conversations" ON garden_guide_conversations
    FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can insert their own conversations
CREATE POLICY "Users can insert own conversations" ON garden_guide_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own conversations
CREATE POLICY "Users can update own conversations" ON garden_guide_conversations
    FOR UPDATE USING (auth.uid() = user_id);

-- Policy: Users can delete their own conversations
CREATE POLICY "Users can delete own conversations" ON garden_guide_conversations
    FOR DELETE USING (auth.uid() = user_id);

-- Create an index for faster lookups by user_id
CREATE INDEX IF NOT EXISTS idx_garden_guide_conversations_user_id 
ON garden_guide_conversations(user_id);

-- Create an index for faster lookups by updated_at
CREATE INDEX IF NOT EXISTS idx_garden_guide_conversations_updated_at 
ON garden_guide_conversations(updated_at DESC);

-- Sacred Message Usage Tracking Table
-- This table tracks seeker message usage for gentle stewardship
CREATE TABLE IF NOT EXISTS garden_guide_usage (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    monthly_message_count INTEGER DEFAULT 0,
    daily_message_count INTEGER DEFAULT 0,
    last_message_date DATE DEFAULT CURRENT_DATE,
    last_reset_date DATE DEFAULT CURRENT_DATE,
    subscription_tier TEXT DEFAULT 'seeker', -- 'seeker', 'gardener', 'guardian'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Row Level Security for usage tracking
ALTER TABLE garden_guide_usage ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own usage
CREATE POLICY "Users can view own usage" ON garden_guide_usage
    FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can insert their own usage
CREATE POLICY "Users can insert own usage" ON garden_guide_usage
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own usage" ON garden_guide_usage
CREATE POLICY "Users can update own usage" ON garden_guide_usage
    FOR UPDATE USING (auth.uid() = user_id);

-- Create index for faster usage lookups
CREATE INDEX IF NOT EXISTS idx_garden_guide_usage_user_id 
ON garden_guide_usage(user_id);
