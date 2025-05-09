// src/app/api/minutas/comision-tipo/route.ts
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const comision = searchParams.get('comision');
  const tipo = searchParams.get('tipo');

  if (!comision && !tipo) {
    return Response.json({ error: 'Debe enviar comisión, tipo, o ambos' }, { status: 400 });
  }

  const condiciones: any = {};

  if (comision) {
    condiciones.comision = { equals: comision, mode: 'insensitive' };
  }

  if (tipo) {
    condiciones.tipo_evento = { equals: tipo, mode: 'insensitive' };
  }

  try {
    const resultados = await prisma.minuta.findMany({
      where: condiciones,
      orderBy: {
        fecha: 'desc', // asumiendo que `fecha` es string ISO o fecha válida
      },
      take: 100,
    });

    return Response.json(resultados);
  } catch (error) {
    return Response.json({ error: 'Error al buscar', detalle: String(error) }, { status: 500 });
  }
}
