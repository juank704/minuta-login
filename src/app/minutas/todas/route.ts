// src/app/api/minutas/todas/route.ts
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const resultados = await prisma.minuta.findMany({
      orderBy: {
        fecha: 'desc',
      },
      take: 100,
    });

    return Response.json(resultados);
  } catch (error: any) {
    console.error('Error en /api/minutas/todas:', error);
    return Response.json(
      { error: 'Error al buscar minutas', detalle: error.message },
      { status: 500 }
    );
  }
}
