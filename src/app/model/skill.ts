export class Skill {
    id?: number;
    nombre: string;
    porcentaje: number;
    color: string;

    constructor(nombre:string, porcentaje: number, color:string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.color = color;
    }
}
