import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';
import { Tareas } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {

  tasks = signal<Tareas[]>([]);


  filter = signal<'all' | 'pending' | 'completed'>('all');

  tasksByFlter = computed(()=>{
    const filter = this.filter();
    const tasks = this.tasks();
    if (filter === 'pending'){
      return tasks.filter((task)=> !task.completed);
    }
    if (filter === 'completed'){
      return tasks.filter((task)=> task.completed);
    }
    return tasks;
  })

  newTareaControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ],
  });

  constructor(){
    effect(()=>{
      const tasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

  ngOnInit(){
    const tasks = localStorage.getItem('tasks');
    if (tasks){
      this.tasks.set(JSON.parse(tasks));
    }
  }


  changeHandler(){
    const value = this.newTareaControl.value;
    if (this.newTareaControl.valid && value.trim() !== ''){
      this.addTarea(value);
      this.newTareaControl.reset();
    }

  }

  cambiarEstadodeTarea(index: number){ // Cambiar estado de tarea
    this.tasks.update((tasks)=> // Actualizar tareas
      tasks.map((tarea, i)=>  // Mapear tareas y cambiar estado de tarea seleccionada por el usuario
        i === index ? {...tarea, completed: !tarea.completed}: tarea) // Si la tarea seleccionada es igual al index, cambiar estado de tarea seleccionada por el usuario
  )
}

  addTarea(tittle: string){
    const newTarea = {
      id: Date.now(),
      tittle,
      completed: false
    }
    this.tasks.update((tareas)=>[...tareas, newTarea])
  }

  updateTarea(index: number){
    this.tasks.update(prevState => {
      return prevState.map((task, i) => {
        if (i === index){
          return {...task, editing: true}
        }
        return {...task, editing: false};
      })
    })
  }

  updatetitleTarea(index: number, newTittle: Event){
    const input = newTittle.target as HTMLInputElement;
    this.tasks.update(prevState => {
      return prevState.map((task, i) => {
        if (i === index){
          return {...task, tittle: input.value, editing: false}
        }
        return task;
      })
    })
  }

  deletTarea(index:number){
    this.tasks.update((tarea) => tarea.filter((task, position)=> position !== index))
  }

  changeFilter(filter: 'all' | 'pending' | 'completed'){
    this.filter.set(filter);
  }


}
