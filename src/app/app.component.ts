import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Test1Component}from './firstcomponent/test1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'instagram';
  items=[1,2,3,4,5]
}


