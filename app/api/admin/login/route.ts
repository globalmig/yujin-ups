import { NextRequest } from 'next/server';
import { checkLoginRateLimit, issueToken, verifyPassword } from '@/lib/auth';
import { getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (!checkLoginRateLimit(ip)) {
    return Response.json({ error: 'Too many attempts. Try again later.' }, { status: 429 });
  }

  let body: { password?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (typeof body.password !== 'string' || !verifyPassword(body.password)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { token, expiresAt } = issueToken();
  return Response.json({ token, expiresAt });
}
