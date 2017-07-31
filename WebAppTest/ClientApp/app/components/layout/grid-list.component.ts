import { Component } from '@angular/core';

@Component({
    selector: 'grid-list-usage',
    templateUrl: './grid-list.component.html',
    styleUrls: ['./grid-list.component.css']
})
export class GridListComponent {
    images = [
        '/assets/microsoft.png',
        '/assets/webpack.png',
        '/assets/github-icon.png',
        '/assets/visual-studio.png',
        '/assets/angular.png',
        '/assets/chrome.gif'
    ];
}