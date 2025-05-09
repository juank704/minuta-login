// src/app/api/minutas/route.ts
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  const resultados = await prisma.minuta.findMany({
    where: {
      OR: [
        { titulo: { contains: q, mode: 'insensitive' } },
        { contenido: { contains: q, mode: 'insensitive' } },
      ],
    },
  });

  return Response.json(resultados);
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    await prisma.minuta.create({
      data: {
        ...body,
      },
    });

    return Response.json({ mensaje: 'Minuta guardada' }, { status: 201 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return Response.json({ error: 'ID requerido para actualizar' }, { status: 400 });
  }

  const body = await request.json();

  try {
    await prisma.minuta.update({
      where: { id },
      data: {
        ...body,
      },
    });

    return Response.json({ mensaje: 'Minuta actualizada' });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
