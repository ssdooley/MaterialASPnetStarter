import { DataSource } from '@angular/cdk';
import { MdPaginator, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { DatabaseService } from '../services/database.service';
import { UserData } from '../models/user.model';

export class CompleteDataSource extends DataSource<any> {
    filterChange = new BehaviorSubject('');
    filteredData: UserData[];
    get filter(): string { return this.filterChange.value; }
    set filter(filter: string) { this.filterChange.next(filter); }

    constructor(private dbService: DatabaseService, private paginator: MdPaginator, private sort: MdSort) {
        super();
        this.filteredData = dbService.data.slice();
    }

    connect(): Observable<UserData[]> {
        const displayDataChanges = [
            this.dbService.dataChange,
            this.filterChange,
            this.paginator.page,
            this.sort.mdSortChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            this.filteredData = this.dbService.data.slice().filter((item: UserData) => {
                const searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });

            const sortedData = this.getSortedData(this.filteredData);

            let startIndex = this.paginator.pageIndex * this.paginator.pageSize;

            if (startIndex > this.filteredData.length) {
                startIndex = 0;
                this.paginator.pageIndex = 0;
            }

            return sortedData.slice().splice(startIndex, this.paginator.pageSize);
        });
    }

    disconnect() { }

    getSortedData(data: UserData[]): UserData[] {
        if (!this.sort.active || this.sort.direction === '') { return data; }

        return data.slice().sort((a, b) => {
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
        });
    }
}