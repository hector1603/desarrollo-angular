export class Transaccion {
    constructor(
        public id: number,
        public fecha: Date,
        public descripcion: string,
        public monto: number,
        public tipo: string,
    ) {}
}