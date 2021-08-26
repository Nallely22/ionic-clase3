import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  rut:String = ""; /* nombre de variable : luego el tipo = "el valor" */
  nombreCompleto:String = "";
  edad:BigInteger;

  /* metodo */
  cambiarDatos(){
    alert('pincho boton'+this.rut);
  }
}
