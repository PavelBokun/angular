import { Component, ViewEncapsulation } from '@angular/core';
import { FouthcomponentComponent } from '../fouthcomponent/fouthcomponent.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../parent/child/child.component';

@Component({
  standalone: true,
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
    <app-parent></app-parent>
    
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [FouthcomponentComponent,ParentComponent],
})
export class FivethcomponentComponent {

}
