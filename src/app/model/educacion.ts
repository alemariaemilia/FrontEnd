export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imgE: string;
    inicioE: string;
    finalE: string;

    constructor(nombreE: string, descripcionE: string, imgE: string, inicioE: string, finalE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.inicioE = inicioE;
        this.finalE = finalE;
    }
}
