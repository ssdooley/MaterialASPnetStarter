import { Component } from '@angular/core';

@Component({
    selector: 'slider-usage',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent {
    autoTicks = false;
    disabled = false;
    invert = false;
    max = 48;
    min = 8;
    showTicks = true;
    step = 4;
    thumbLabel = true;
    value = 16;
    vertical = false;

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
    }

    set tickInterval(v) {
        this._tickInterval = Number(v);
    }

    private _tickInterval = 1;
}