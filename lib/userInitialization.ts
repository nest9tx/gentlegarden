import { createClient } from './supabase';

export const initializeUserInGarden = async (userId: string, email: string) => {
  try {
    const supabase = createClient();
    
    // Check if user already exists in garden_guide_usage
    const { data: existingUser } = await supabase
      .from('garden_guide_usage')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    // If user doesn't exist, create them
    if (!existingUser) {
      console.log(`🌱 Initializing new soul in the garden: ${email}`);
      
      const { data, error } = await supabase
        .from('garden_guide_usage')
        .insert({
          user_id: userId,
          subscription_tier: 'seeker', // Default to seeker
          monthly_message_count: 0,
          daily_message_count: 0,
          last_message_date: new Date().toISOString().split('T')[0],
          last_reset_date: new Date().toISOString().split('T')[0]
        })
        .select();
      
      if (error) {
        console.error('Error initializing user in garden:', error);
      } else {
        console.log('✨ Soul successfully welcomed to the garden:', data);
      }
    }
    
    return existingUser || { user_id: userId, subscription_tier: 'seeker' };
  } catch (error) {
    console.error('Error in initializeUserInGarden:', error);
    return null;
  }
};

export const updateUserSubscription = async (userId: string, subscriptionTier: 'seeker' | 'gardener') => {
  try {
    const supabase = createClient();
    
    console.log(`🌿 Updating subscription for user ${userId} to ${subscriptionTier}`);
    
    const { data, error } = await supabase
      .from('garden_guide_usage')
      .upsert({
        user_id: userId,
        subscription_tier: subscriptionTier,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      })
      .select();
    
    if (error) {
      console.error('Error updating user subscription:', error);
    } else {
      console.log(`✨ Subscription updated successfully:`, data);
    }
    
    return { success: !error, data };
  } catch (error) {
    console.error('Error in updateUserSubscription:', error);
    return { success: false, error };
  }
};
