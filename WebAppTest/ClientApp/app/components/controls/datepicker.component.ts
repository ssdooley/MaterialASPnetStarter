import { Component } from '@angular/core';

@Component({
    selector: 'datepicker-usage',
    templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
    selectedDate: number = Date.now();
}