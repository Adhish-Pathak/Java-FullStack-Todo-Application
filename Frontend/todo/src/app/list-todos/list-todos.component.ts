import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo {
  constructor(
    public id : number,
    public description: string,
    public done : boolean,
    public targetDate : Date,


  ){

  }
  
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[] = [];

  message : string = ''
  // =[
  //   new Todo(1, "learn to dance", false, new Date()),
  //   new Todo(2, "learn to sing", false, new Date()),
  //   new Todo(2, "learn to talk", true, new Date()),
  //   // {id: 1, description : "learn to dance"},
  //   // {id: 2, description : "learn to sing"},
  //   // {id: 3, description : "learn to talk"},
  // ]
//  todo = {
//   id: 1,
//   description : "learn to dance"
//  }

 constructor(
    private todoService: TodoDataService,
    private router: Router,
  ) { }

ngOnInit(){
     this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('Adhish').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
     )
  }

  deleteTodo(id: number){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('Adhish', id).subscribe(
      response=>{console.log(response);
      this.message = `Delete of ${id} Successful!`;
      this.refreshTodos();
      }
    )
  }
  updateTodo(id:any){
    console.log(`update${id}`)
    this.router.navigate(['todos',id])
  }
  addTodo(){
    this.router.navigate(['todos', -1]);
  }
}
