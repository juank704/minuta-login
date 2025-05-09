// types.ts

export type MinutaBase = {
    titulo: string;
    contenido: string;
    asistentes?: string[];
    tags?: string[];
    proyecto?: string;
    fecha?: string;
    boletin?: string;
    comision?: string;
    tipo_evento?: string;
    hora_inicio?: string;
    hora_fin?: string;
    urgencia?: string;
    tramite?: string;
    estado?: string;
    origen?: string;
    detalle?: string;
  };
  
  export type Minuta = MinutaBase & {
    id: string;
  };
  
  export type MinutaEditar = MinutaBase & {
    id?: string; // opcional en modo edición
  };
  