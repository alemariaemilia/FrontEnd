export class Proyecto {
    id?: number;
    tituloP: string;
    descripcionP: string;
    imgP: string;
    urlP: string;

    constructor(tituloP: string, descripcionP: string, imgP: string, urlP: string,) {
        this.tituloP = tituloP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
        this.urlP = urlP;
    }
}