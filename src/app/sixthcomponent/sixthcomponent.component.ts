import { Component, ViewEncapsulation } from '@angular/core'
import { FivethcomponentComponent } from '../fivethcomponent/fivethcomponent.component'
import { FouthcomponentComponent } from '../fouthcomponent/fouthcomponent.component'

interface User {
  name: string
  age: number
}

@Component({
  standalone: true,
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <p>{{ costomer }}</p>
    <button  [disabled]="isApploading">Toggle Loading</button>
    <p>{{isApploading}}</p>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [FouthcomponentComponent, FivethcomponentComponent],
})
export class SixthcomponentComponent {
  costomer = 'Maria'
  user :User= {
    name: 'Maria',
    age: 23,
  }
  isApploading=true

  constructor () {
    setTimeout(() => {
      this.isApploading=false
  },3000)
}}
