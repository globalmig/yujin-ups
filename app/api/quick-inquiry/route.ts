import { NextRequest } from 'next/server';
import { saveQuickInquiry } from '@/lib/quick-inquiries';
import { getClientIp, rateLimit } from '@/lib/rate-limit';

const MAX_BODY_BYTES = 2_000;

function isNonEmptyString(value: unknown, maxLength = 100): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

function isNumericTel(value: unknown, maxLength = 20): value is string {
  return isNonEmptyString(value, maxLength) && /^[0-9]+$/.test(value);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (!rateLimit(`quick-inquiry:${ip}`, 5, 10 * 60 * 1000)) {
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

  if (!isNonEmptyString(body.name, 100) || !isNumericTel(body.tel, 20)) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  try {
    await saveQuickInquiry({
      name: body.name,
      tel: body.tel,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
