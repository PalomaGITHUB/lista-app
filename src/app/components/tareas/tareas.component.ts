import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  public listaTarea: Tarea[] = [];
  public nombreTarea: string = "";

  agregarTarea(){
    // const tarea: Tarea = new Tarea(this.nombreTarea, false);

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    if(tarea.nombre.trim()) this.listaTarea.push(tarea);
    this.nombreTarea = "";
  }

  eliminarTarea(i: number){
    //splice corta el rango desde i hasta una posicion mas
    this.listaTarea.splice(i,1);
  }
modificarEstado(i: number){
  //al hacer click en el circulo, pasa de true a false y viceversa
  this.listaTarea[i].estado = !this.listaTarea[i].estado;
}
}
