import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'example-dialog',
    templateUrl: 'example-dialog.component.html'
})
export class ExampleDialogComponent {
    constructor(public dialogRef: MdDialogRef<ExampleDialogComponent>) { }
}