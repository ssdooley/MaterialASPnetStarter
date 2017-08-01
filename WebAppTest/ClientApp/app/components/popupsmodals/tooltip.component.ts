import { Component } from '@angular/core';

@Component({
    selector: 'tooltip-usage',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.css']
})
export class TooltipComponent {
    positions: Array<string>;
    position: string;
    constructor() {
        this.positions = [
            'before',
            'after',
            'above',
            'below',
            'left',
            'right'
        ];
        this.position = this.positions[0];
    }
}