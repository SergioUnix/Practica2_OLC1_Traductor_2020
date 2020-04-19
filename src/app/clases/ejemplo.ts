export interface ClienteInterface {
    nombre: String;
    cif: String;
    direccion: String;
    creado: Date;
  }
  
  export class Cliente implements ClienteInterface {
    creado: Date;
    constructor(public nombre: string, public cif: String, public direccion: String) {
      this.creado = new Date(Date.now());
     }
  }