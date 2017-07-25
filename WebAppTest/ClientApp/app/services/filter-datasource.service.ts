import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { DatabaseService } from './database.service';
import { UserData } from '../models/user.model';

@Injectable()
export class FilterDataSourceService extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(private dbService: DatabaseService) {
        super();
    }

    connect(): Observable<UserData[]> {
        const displayDataChanges = [
            this.dbService.dataChange,
            this._filterChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            return this.dbService.data.slice().filter((item: UserData) => {
                const serachStr = (item.name + item.color).toLowerCase();
                return serachStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
        });
    }

    disconnect() { }
}