export interface Product {
    _id : string; //OBLIGATORIO
    image : string; //URL de la imagén del producto
    title : string; //OBLIGATORIO
    description? : string; //NO OBLIGATORIO
    price : number; //OBLIGATORIO
    categories? : string;
    isAvailable? : boolean;
    date? : Date;
}
