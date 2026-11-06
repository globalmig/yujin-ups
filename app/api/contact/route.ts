import { NextRequest } from 'next/server';
import { saveContact } from '@/lib/contacts';
import { getClientIp, rateLimit } from '@/lib/rate-limit';

const MAX_BODY_BYTES = 10_000;

function isNonEmptyString(value: unknown, maxLength = 200): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

function isOptionalString(value: unknown, maxLength = 200): string | null {
  return isNonEmptyString(value, maxLength) ? value : null;
}

function isValidEmail(local: unknown, domain: unknown): boolean {
  if (!isNonEmptyString(local, 64) || !isNonEmptyString(domain, 190)) return false;
  return /^[^\s@]+$/.test(local) && /^[^\s@]+\.[^\s@]+$/.test(domain);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (!rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000)) {
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
    !isNonEmptyString(body.position) ||
    !isNonEmptyString(body.manager) ||
    !isNonEmptyString(body.tel1, 4) ||
    !isNonEmptyString(body.tel2, 4) ||
    !isNonEmptyString(body.tel3, 4) ||
    !isNonEmptyString(body.product, 50) ||
    !isValidEmail(body.email1, body.email2)
  ) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  const mobile =
    isNonEmptyString(body.mobile1, 4) && isNonEmptyString(body.mobile2, 4) && isNonEmptyString(body.mobile3, 4)
      ? `${body.mobile1}-${body.mobile2}-${body.mobile3}`
      : null;
  const fax =
    isNonEmptyString(body.fax1, 4) && isNonEmptyString(body.fax2, 4) && isNonEmptyString(body.fax3, 4)
      ? `${body.fax1}-${body.fax2}-${body.fax3}`
      : null;

  try {
    await saveContact({
      company: body.company,
      position: body.position,
      manager: body.manager,
      tel: `${body.tel1}-${body.tel2}-${body.tel3}`,
      mobile,
      fax,
      email: `${body.email1}@${body.email2}`,
      product: body.product,
      input_voltage: isOptionalString(body.inputVoltage, 50),
      output_voltage: isOptionalString(body.outputVoltage, 50),
      input_hz: isOptionalString(body.inputHz, 50),
      output_hz: isOptionalString(body.outputHz, 50),
      capacity: isOptionalString(body.capacity, 50),
      backup: isOptionalString(body.backup, 50),
      message: isOptionalString(body.message, 2000),
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
