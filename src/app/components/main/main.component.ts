import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{

  ngOnInit(): void {
  }


  constructor() {
  }

  task = {
    name: '',
    description : '',
    date : ''
  }

  print() {
    alert(
      "Nome: "+ this.task.name+
      " Descrição: "+ this.task.description+
      " Date: "+this.task.date
    )
  }
}
