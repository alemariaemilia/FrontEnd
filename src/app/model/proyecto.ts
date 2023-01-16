export class Proyecto {
    id?: number;
    tituloP: string;
    descripcionP: string;
    imgP: string;
    urlP: string;
    inicioP: string;
    finalP: string;

    constructor(tituloP: string, descripcionP: string, imgP: string, urlP: string, inicioP: string, finalP: string) {
        this.tituloP = tituloP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
        this.urlP = urlP;
        this.inicioP = inicioP;
        this.finalP = finalP;
    }
}