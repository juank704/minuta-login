// src/app/api/minutas/eliminar/route.ts
import { prisma } from '@/lib/prisma';

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return Response.json({ error: 'ID requerido' }, { status: 400 });
  }

  try {
    await prisma.minuta.delete({
      where: { id },
    });

    return Response.json({ mensaje: 'Minuta eliminada' });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
