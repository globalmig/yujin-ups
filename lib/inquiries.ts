import { supabase } from './supabase';
import { supabasePublic } from './supabase-public';

export interface InquirySubmission {
  id: string;
  created_at: string;
  company: string;
  manager: string;
  tel: string;
  email: string;
  message: string;
}

export async function getInquiries(): Promise<InquirySubmission[]> {
  const { data, error } = await supabase
    .from('general_inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function saveInquiry(
  inquiry: Omit<InquirySubmission, 'id' | 'created_at'>
): Promise<void> {
  const { error } = await supabasePublic.from('general_inquiries').insert(inquiry);

  if (error) throw error;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('general_inquiries')
    .delete()
    .eq('id', id)
    .select('id');

  if (error) throw error;
  return (data?.length ?? 0) > 0;
}
