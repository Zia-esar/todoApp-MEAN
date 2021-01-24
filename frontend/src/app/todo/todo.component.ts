import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string;
  list: Todo[] = [];
  // todoId;
  userTitle = JSON.parse(localStorage.getItem('user'));
  user = this.userTitle[0].username;

  constructor(
      private _router: Router,
      private todoService: TodoService,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((list: Todo[]) => this.list = list);
    // this.todoValue = "";
    // this.route.params.subscribe((params: Params)=> {
    //   this.todoId = params.todoId
    // })`
  }

  addTodo(){
    console.log(this.title)
    this.todoService.add(this.title)
      .subscribe(()=> this.todoService.getTodoList().subscribe((list: Todo[]) => this.list = list));

    // this.title = "";
  }

  deleteItem(todo: Todo){
    this.todoService.deleteTodo(todo._id).
      subscribe(() => this.list = this.list.filter(item => item._id !== todo._id))
  }

  logOut(){
    localStorage.clear();
    this._router.navigateByUrl('/');
  }

}
