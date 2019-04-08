import { Component } from '@angular/core';
import { Empleado } from './models/empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadosArray: Empleado[] = [
    {id: 1, nombre: 'Jesús', pais:'Rumania'},
    {id: 2, nombre: 'Cristian', pais:'Somalia'},
    {id: 3, nombre: 'Raul', pais:'República Democrática del Congo'}
  ];

}
