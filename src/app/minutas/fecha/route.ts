// src/app/api/minutas/fecha/route.ts
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const desde = searchParams.get('desde');
  const hasta = searchParams.get('hasta');

  if (!desde || !hasta) {
    return Response.json({ error: 'Fechas requeridas' }, { status: 400 });
  }

  try {
    const resultados = await prisma.minuta.findMany({
      where: {
        fecha: {
          gte: desde,
          lte: hasta,
        },
      },
      orderBy: {
        fecha: 'asc',
      },
      take: 100,
    });

    return Response.json(resultados);
  } catch (error) {
    return Response.json({ error: 'Error al buscar por fecha', detalle: String(error) }, { status: 500 });
  }
}
