export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imgE: string;

    constructor(nombreE: string, descripcionE: string, imgE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
    }
}
