import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { DatabaseService } from '../services/database.service';
import { UserData } from './user.model';

export class SortDataSource extends DataSource<any> {
    constructor(private dbService: DatabaseService, private sort: MdSort) {
        super();
    }

    connect(): Observable<UserData[]> {
        const displayDataChanges = [
            this.dbService.dataChange,
            this.sort.mdSortChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            return this.getSortedData();
        });
    }

    disconnect() { }

    getSortedData(): UserData[] {
        const data = this.dbService.data.slice();
        if (!this.sort.active || this.sort.direction === '') { return data; }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this.sort.active) {
                case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
                case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
                case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
                case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
        })
    }
}