import { Component, ViewEncapsulation } from '@angular/core';
import { FouthcomponentComponent } from '../fouthcomponent/fouthcomponent.component';

@Component({
  standalone: true,
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [FouthcomponentComponent],
})
export class FivethcomponentComponent {

}
