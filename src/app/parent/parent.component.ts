import { Component } from '@angular/core'
import { ChildComponent } from './child/child.component'
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})

export class ParentComponent {
 
  grades: string []=['math: 5','english:3','math: 5','english:3']
new:any =[]

  getChange(value:string){
   debugger
// this.grades.push(value)
this.grades.push(value)

console.log(this.grades)


  }
}
