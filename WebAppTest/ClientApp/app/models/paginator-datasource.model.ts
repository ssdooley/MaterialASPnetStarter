import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { DatabaseService } from '../services/database.service';
import { UserData } from '../models/user.model';

export class PaginatorDataSource extends DataSource<any> {
    constructor(private dbService: DatabaseService, private paginator: MdPaginator) {
        super();
    }

    connect(): Observable<UserData[]> {
        const displayDataChanges = [
            this.dbService.dataChange,
            this.paginator.page
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.dbService.data.slice();

            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        });
    }

    disconnect() {}
}
