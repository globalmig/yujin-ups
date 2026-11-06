import { supabase } from './supabase';
import { supabasePublic } from './supabase-public';

export interface QuickInquirySubmission {
  id: string;
  created_at: string;
  name: string;
  tel: string;
}

export async function getQuickInquiries(): Promise<QuickInquirySubmission[]> {
  const { data, error } = await supabase
    .from('quick_inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function saveQuickInquiry(
  inquiry: Omit<QuickInquirySubmission, 'id' | 'created_at'>
): Promise<void> {
  const { error } = await supabasePublic.from('quick_inquiries').insert(inquiry);

  if (error) throw error;
}

export async function deleteQuickInquiry(id: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('quick_inquiries')
    .delete()
    .eq('id', id)
    .select('id');

  if (error) throw error;
  return (data?.length ?? 0) > 0;
}
