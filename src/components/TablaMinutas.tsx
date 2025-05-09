// src/components/TablaMinutas.tsx
import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  ColumnDef
} from '@tanstack/react-table';

type Minuta = {
  titulo: string;
  boletin?: string;
  comision?: string;
  tipo_evento?: string;
  urgencia?: string;
  tramite?: string;
  hora_inicio?: string;
  hora_fin?: string;
};

const columnHelper = createColumnHelper<Minuta>();

export function TablaMinutas({ data }: { data: Minuta[] }) {
  const columns: ColumnDef<Minuta>[] = [
    columnHelper.accessor('titulo', { header: 'Título' }),
    columnHelper.accessor('boletin', { header: 'Boletín' }),
    columnHelper.accessor('comision', { header: 'Comisión' }),
    columnHelper.accessor('tipo_evento', { header: 'Tipo' }),
    columnHelper.accessor('urgencia', { header: 'Urgencia' }),
    columnHelper.accessor('tramite', { header: 'Trámite' }),
    columnHelper.accessor(
      row => `${row.hora_inicio || ''} - ${row.hora_fin || ''}`,
      {
        id: 'horario',
        header: 'Horario'
      }
    )
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table border={1} cellPadding={6} style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: '#f0f0f0' }}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
