import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  public todo:string='';
  public todoIndex:string='';
  public todoList:string[]= [];
  public todoArr:any = localStorage.getItem('todo')?.split(',');


  ngOnInit(): void {
    if(localStorage.length!=0){
      this.todoList = this.todoList.concat(this.todoArr); 
    console.log("Loaded array",localStorage.length);
    }
    else{
      console.log('No data');
    }
    
    
  }

  getId(item:string){
    this.todoIndex=item;
    console.log(this.todoIndex);
    
  }

  addTodo(){
    this.todoList.push(this.todo);
    localStorage.setItem('todo',this.todoList.toString())
  }
  deleteTodo(){
    const index = this.todoList.indexOf(this.todoIndex);   
     if(index>-1){
       this.todoList.splice(index,1);
       console.log(this.todoList);
       
       localStorage.setItem('todo',this.todoList.toString());
     }
  }
  editTodo(){
     const index = this.todoList.indexOf(this.todoIndex);
     if(this.todo!=''){
       this.todoList[index]=this.todo;
       localStorage.setItem('todo',this.todoList.toString());
     }
    
  }
}
