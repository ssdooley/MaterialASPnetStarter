import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ExampleDialogComponent } from './example-dialog.component';

@Component({
    selector: 'dialog-usage',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css']
})
export class DialogComponent {
    selectedOption: string;

    constructor(public dialog: MdDialog) { }

    openDialog() {
        const dialogRef = this.dialog.open(ExampleDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}