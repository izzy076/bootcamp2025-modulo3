import { Component, inject, OnInit } from '@angular/core';
// inject: para poder utilizar el servicio
// 1. importar el servicio porque queremos hacer get de los productos
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})


export class Card implements OnInit {

  // 1. La inyección de dependencias y declaración de variables
  // inyectar nuestro servicio
  // toca inyectar toda dependencia que no este en el mismo archivo
  _productService = inject(ProductService);
  // variable
  // numero : number = 0; 
  // texto :string = ''; 
  // buleano : boolean = false;
  allProducts: Product[] = []; // vamos a almacenar todos los productos de la base de datos


  showProducts() {
    // 1. voy a hacer al petición GET 
    // 2. voy a guardar losproductos en mi variable "allProducts"
    // 3. voy a mostrarlos en mi navegador

    this._productService.getProducts().subscribe({
      // manejo de errores -> gestión de respuestas del back
      next: (response : any) => {
        this.allProducts = response.data;
        console.log(this.allProducts);
       }, //respuestas positivas del back
      error: (error : any) => { 
        console.error(error);
      } //respuestas de error del back

    })

    // subscribe: abriera la puerta al proyecto y conectarse con su backend, traer la respuesta a su front y todo en html
    // subscribe: permite acceder a la respuesta del backend
  }

  ngOnInit(): void {
    // ejecute una acción al cargarse por primera vez en el navegador
    this.showProducts();
  }

}
