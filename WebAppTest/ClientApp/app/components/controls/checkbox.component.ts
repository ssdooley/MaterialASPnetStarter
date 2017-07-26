import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-usage',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
    checked = false;
    indeterminate = false;
    align = 'start';
    disabled = false;
}