import { Component, ViewEncapsulation } from '@angular/core'
import { FivethcomponentComponent } from '../fivethcomponent/fivethcomponent.component'
import { FouthcomponentComponent } from '../fouthcomponent/fouthcomponent.component'
import { FormsModule } from '@angular/forms'

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
    <button [disabled]="isApploading">Toggle Loading</button>
    <p>{{ isApploading }}</p>
    <button (click)="titleButtonch()">{{ titleButton2 }}</button>
    <div><input type="text" (input)="changeText($event)" /></div>
    <div><input type="text" (keyup.enter)="changeText($event)" /></div>
    <div><input type="text" [(ngModel)]='text' /></div>
    <!-- <div><input type="text" (input)="setUppercaseName($event.target.value)" ></div> -->

  <p>{{text}}</p>
  <!-- <p>{{text2}}</p> -->

    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [FouthcomponentComponent, FivethcomponentComponent, FormsModule],
})
export class SixthcomponentComponent {
  costomer = 'Maria'
  user: User = {
    name: 'Maria',
    age: 23,
  }
  isApploading = true
  titleButton = 'Toggle Loading'
  titleButton2 = 'Toggle Loading changed'
  text = ''
  // text2=''

  changeText(event:Event) {
    this.text = (event.currentTarget as HTMLInputElement).value.toUpperCase()
    // this.text2=this.text.toUpperCase()
  }

  titleButtonch() {
    this.titleButton2 = 'Toggle Loading changed now'
  }
  // setUppercaseName(value: Event){
  //   this.text = this.text.toUpperCase() 
  //   this.text = (event.currentTarget as HTMLInputElement).value
  // }

  constructor() {
    setTimeout(() => {
      this.isApploading = false
    }, 3000)
  }
}
