import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from './database.service';
import { UserData } from '../models/user.model';

@Injectable()
export class BasicDataSourceService extends DataSource<any> {
    constructor(private dbService: DatabaseService) {
        super();
    }

    connect(): Observable<UserData[]> {
        return this.dbService.dataChange.asObservable();
    }

    disconnect() { }
}