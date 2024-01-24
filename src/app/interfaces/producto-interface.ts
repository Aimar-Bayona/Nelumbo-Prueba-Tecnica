export interface DetalleInterface {
    clave: string;
    valor: string | number;
  }
  
  export interface ProductoInterface {
    id: number;
    categoria: string;
    imagen: string[];
    nombre: string;
    marca: string;
    estrellas: number;
    precioSemana: string;
    precioMes: string;
    precioOferta: string;
    precioNormal: string;
    detalles: DetalleInterface[];
  }
  