import { NextRequest } from 'next/server';
import { saveInquiry } from '@/lib/inquiries';
import { getClientIp, rateLimit } from '@/lib/rate-limit';

const MAX_BODY_BYTES = 10_000;

function isNonEmptyString(value: unknown, maxLength = 200): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

function isNumericTel(value: unknown, maxLength = 4): value is string {
  return isNonEmptyString(value, maxLength) && /^[0-9]+$/.test(value);
}

function isValidEmail(local: unknown, domain: unknown): boolean {
  if (!isNonEmptyString(local, 64) || !isNonEmptyString(domain, 190)) return false;
  return /^[^\s@]+$/.test(local) && /^[^\s@]+\.[^\s@]+$/.test(domain);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (!rateLimit(`inquiry:${ip}`, 5, 10 * 60 * 1000)) {
    return Response.json({ error: 'Too many requests' }, { status: 429 });
  }

  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: 'Payload too large' }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (
    !isNonEmptyString(body.company) ||
    !isNonEmptyString(body.manager) ||
    !isNumericTel(body.tel1) ||
    !isNumericTel(body.tel2) ||
    !isNumericTel(body.tel3) ||
    !isValidEmail(body.email1, body.email2) ||
    !isNonEmptyString(body.message, 2000)
  ) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  try {
    await saveInquiry({
      company: body.company,
      manager: body.manager,
      tel: `${body.tel1}-${body.tel2}-${body.tel3}`,
      email: `${body.email1}@${body.email2}`,
      message: body.message,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
