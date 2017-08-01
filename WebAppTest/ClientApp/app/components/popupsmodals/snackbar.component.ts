import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ExampleSnackbarComponent } from './example-snackbar.component';

@Component({
    selector: 'snackbar-usage',
    templateUrl: 'snackbar.component.html',
    styleUrls: ['snackbar.component.css']
})
export class SnackbarComponent {
    snacks: Array<string> = new Array<string>();

    constructor(public snackBar: MdSnackBar) { }
    openSnackBar(message: string, action: string) {
        const snackBarRef = this.snackBar.open(message, action, {
            duration: 2000
        });

        snackBarRef.afterDismissed().subscribe(() => {
            this.snacks.push(message + 'Dismissed');
        });

        snackBarRef.onAction().subscribe(() => {
            this.snacks.push(action + 'Action');
        });
    }
    openSnackBarComponent() {
        const snackBarRef = this.snackBar.openFromComponent(ExampleSnackbarComponent, {
            duration: 2000
        });

        snackBarRef.afterDismissed().subscribe(() => {
            this.snacks.push('SnackBar Component Dismissed');
        });

        snackBarRef.onAction().subscribe(() => {
            this.snacks.push('SnackBar Component Action');
        });
    }
}