// Este archivo contendrá las definiciones de los tipos comunes

export interface Ejercicio {
  nombre: string;
  material?: string;
  sets: number;
  repeticiones: number[];
  descanso: number,
  enlaceYoutube: string;
}
