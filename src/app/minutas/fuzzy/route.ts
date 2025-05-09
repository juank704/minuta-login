import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  if (!q) {
    return Response.json({ error: 'Parámetro de búsqueda requerido' }, { status: 400 });
  }

  try {
    const resultados = await prisma.$queryRawUnsafe(`
      SELECT * FROM "Minuta"
      WHERE titulo % $1 OR contenido % $1
      ORDER BY similarity(titulo, $1) DESC
      LIMIT 50;
    `, q);

    return Response.json(resultados);
  } catch (error: any) {
    return Response.json({ error: 'Error en búsqueda fuzzy', detalle: error.message }, { status: 500 });
  }
}
