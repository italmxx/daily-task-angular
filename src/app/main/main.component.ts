import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  taskArray = [
    {
      taskName : 'Risultato task' ,
      isCompleted: false

    }
  ];

  onSubmit(form: NgForm){
    console.log(form);
    this.taskArray.push({taskName: form.controls["task"].value, isCompleted: false});
    form.reset();

  }

  onDelete(index: number){
    console.log(index);
    this.taskArray.splice(index, 1);

  }
  onCheck(index:number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
