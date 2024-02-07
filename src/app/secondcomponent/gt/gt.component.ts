import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-gt',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>gt works!</p>`,
    styleUrl: './gt.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GtComponent { }
