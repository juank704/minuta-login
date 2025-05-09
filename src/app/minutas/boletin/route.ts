// src/app/api/minutas/boletin/route.ts
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const boletin = searchParams.get('boletin');

  if (!boletin) {
    return Response.json({ error: 'Boletín requerido' }, { status: 400 });
  }

  try {
    const resultados = await prisma.minuta.findMany({
      where: {
        boletin: {
          equals: boletin,
          mode: 'insensitive',
        },
      },
    });

    return Response.json(resultados);
  } catch (error) {
    return Response.json({ error: 'Error al buscar el boletín', detalle: String(error) }, { status: 500 });
  }
}
