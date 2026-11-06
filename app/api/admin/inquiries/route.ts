import { NextRequest } from 'next/server';
import { getInquiries } from '@/lib/inquiries';
import { isAuthorized, unauthorized } from '@/lib/auth';

export async function GET(request: NextRequest) {
  if (!isAuthorized(request.headers.get('authorization'))) return unauthorized();

  try {
    const inquiries = await getInquiries();
    return Response.json(inquiries);
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
