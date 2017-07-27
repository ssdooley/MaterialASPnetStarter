import { Component } from '@angular/core';

@Component({
    selector: 'list-usage',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    folders = [
        {
            name: 'Photos',
            updated: new Date('1/1/16')
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16')
        },
        {
            name: 'Work',
            updated: new Date('1/18/16')
        }
    ];
    notes = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/2/16')
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16')
        }
    ];
}
