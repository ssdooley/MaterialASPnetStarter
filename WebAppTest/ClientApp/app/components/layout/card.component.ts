import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    myData: Array<any>;

    constructor(private http: Http) {
        this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(response => response.json())
            .subscribe(res => this.myData = res);
    }
}