import { Component } from '@angular/core';

@Component({
    selector: 'chip-usage',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.css']
})
export class ChipComponent {
    colors = [
        { name: 'None', color: '' },
        { name: 'Primary', color: 'primary' },
        { name: 'Accent', color: 'accent' },
        { name: 'Warn', color: 'warn' }
        ]
}