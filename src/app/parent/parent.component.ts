import { Component } from '@angular/core'
import { ChildComponent } from './child/child.component'

export interface Address{
  sity: string
    street: string
    house: number
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})

export class ParentComponent {
  name = 'Ivan'
  sureName = 'Petrov'
  address : Address= {
    sity: 'Minsk',
    street: 'Lenina',
    house: 49,
  }
}