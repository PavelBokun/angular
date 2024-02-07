import { Component } from '@angular/core';
import { GtComponent } from './gt/gt.component';

@Component({
  selector: 'app-another-component',
  standalone: true,
  imports: [GtComponent],
  templateUrl: './another-component.component.html',
  styleUrl: './another-component.component.css'
})
export class AnotherComponentComponent {

}
