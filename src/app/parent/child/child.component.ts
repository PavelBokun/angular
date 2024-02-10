import { Component, Input } from '@angular/core';
import { Address } from '../parent.component';

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
}
