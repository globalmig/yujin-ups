import { createHash, createHmac, timingSafeEqual } from 'crypto';
import { rateLimit } from './rate-limit';

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

function getSecret(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error('ADMIN_PASSWORD environment variable is not set');
  }
  return password;
}

function safeEqual(a: string, b: string): boolean {
  const hashA = createHash('sha256').update(a).digest();
  const hashB = createHash('sha256').update(b).digest();
  return timingSafeEqual(hashA, hashB);
}

export function checkLoginRateLimit(ip: string): boolean {
  return rateLimit(`admin-login:${ip}`, 5, 5 * 60 * 1000);
}

export function verifyPassword(password: string): boolean {
  return safeEqual(password, getSecret());
}

export function issueToken(): { token: string; expiresAt: number } {
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const payload = String(expiresAt);
  const signature = createHmac('sha256', getSecret()).update(payload).digest('hex');
  return { token: `${payload}.${signature}`, expiresAt };
}

export function verifyToken(token: string | null): boolean {
  if (!token) return false;

  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;

  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false;

  const expectedSignature = createHmac('sha256', getSecret()).update(payload).digest('hex');
  const a = Buffer.from(signature);
  const b = Buffer.from(expectedSignature);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function isAuthorized(authHeader: string | null): boolean {
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  return verifyToken(token);
}

export function unauthorized(): Response {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
