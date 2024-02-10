import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../parent.component';


 export interface Learn{
  math: number
  physic: number
}
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
name='Victor'

@Input() sureNameProps?: string

@Input() address?: Address

@Output() setChange = new EventEmitter<Learn>()
setNumberChange(){
  const math=5
  const physic=4
  this.setChange.emit({math,physic})
}


}

