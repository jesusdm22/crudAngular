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

  if(this.empleadoSeleccionado.id == 0){
    this.empleadoSeleccionado.id = this.empleadosArray.length + 1;
    this.empleadosArray.push(this.empleadoSeleccionado);
  }

  this.empleadoSeleccionado = new Empleado();
}

//Funcion para pasar los datos al formulario y poder editar
openForEdit(empleado: Empleado){
this.empleadoSeleccionado = empleado;
}

//Funcion para eliminar
delete(){
  if(confirm("¿Estás seguro de querer eliminarlo?")){
    this.empleadosArray = this.empleadosArray.filter(x => x != this.empleadoSeleccionado);
    this.empleadoSeleccionado = new Empleado();
  }
}

}
