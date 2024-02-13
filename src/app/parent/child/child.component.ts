import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
inputLearn?:string=""


@Output() setChange = new EventEmitter<any>()
setNumberChange(){
  
  this.setChange.emit(this.inputLearn)
}

addItem(){
  
  this.inputLearn=""
}
}



