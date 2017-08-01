import { Component } from '@angular/core';

@Component({
    selector: 'progress-spinner-usage',
    templateUrl: './progress-spinner.component.html',
    styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent {
    color = 'primary';
    mode = 'determinate';
    value = 50;
}