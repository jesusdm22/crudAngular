import { Component } from '@angular/core';
import { Empleado } from './models/empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadosArray: Empleado[] = [
    {id: 1, nombre: 'Jesus', pais:'Rumania'},
    {id: 2, nombre: 'Cristian', pais:'Somalia'},
    {id: 3, nombre: 'Raul', pais:'República Democrática del Congo'}
  ];

//Empleado vacio
empleadoSeleccionado: Empleado = new Empleado();


//Funcion para agregar y editar empleado
addOrEdit(){

  if(this.empeladoSeleccionado.id == 0){
    this.empleadoSeleccionado.id = this.empleadosArray.length + 1;
    this.empleadosArray.push(this.empleadoSeleccionado);
  }

  this.empleadoSeleccionado = new Empleado();
}

//Funcion para pasar los datos al formulario y poder editar
openForEdit(empleado: Empleado){
this.empeladoSeleccionado = empleado;
}

//Funcion para eliminar
delete(){
  this.empleadosArray = this.empleadosArray.filter(x => x != this.empleadoSeleccionado);
  this.empleadoSeleccionado = new Empleado();
}

}
