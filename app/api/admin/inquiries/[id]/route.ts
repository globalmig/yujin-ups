import { NextRequest } from 'next/server';
import { deleteInquiry } from '@/lib/inquiries';
import { isAuthorized, unauthorized } from '@/lib/auth';

export async function DELETE(
  request: NextRequest,
  ctx: RouteContext<'/api/admin/inquiries/[id]'>
) {
  if (!isAuthorized(request.headers.get('authorization'))) return unauthorized();

  const { id } = await ctx.params;

  try {
    const deleted = await deleteInquiry(id);
    if (!deleted) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
