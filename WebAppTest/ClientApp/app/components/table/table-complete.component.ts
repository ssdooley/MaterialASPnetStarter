import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MdPaginator, MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { CompleteDataSource } from '../../models/complete-datasource.model';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'table-complete-usage',
    templateUrl: 'table-complete.component.html',
    styleUrls: ['table-complete.component.css']
})
export class TableCompleteComponent implements OnInit {
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    dataSource: CompleteDataSource | null;
    @ViewChild(MdSort) sort: MdSort;
    @ViewChild(MdPaginator) paginator: MdPaginator;
    @ViewChild('filter') filter: ElementRef;

    constructor(private dbService: DatabaseService) { }

    ngOnInit() {
        this.dataSource = new CompleteDataSource(this.dbService, this.paginator, this.sort);

        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}
