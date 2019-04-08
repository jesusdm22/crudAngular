import { Component } from '@angular/core';
import {} from './models/empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadosArray: Empleado[] = [
    {id: 1, nombre: 'Jesus', pais:'España'},
    {id: 2, nombre: 'Cristian', pais:'Somalia'},
    {id: 3, nombre: 'Yung Lee', pais:'China'}
  ];

}
