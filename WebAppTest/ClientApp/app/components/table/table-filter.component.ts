import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FilterDataSourceService } from '../../services/filter-datasource.service';

@Component({
    selector: 'table-filter-usage',
    templateUrl: 'table-filter.component.html',
    styleUrls: ['table-filter.component.css'],
    providers: [FilterDataSourceService]
})
export class TableFilterComponent implements OnInit {
    displayedColumns = ['userId', 'userName', 'progress', 'color'];

    @ViewChild('filter') filter: ElementRef;

    constructor(private dataSource: FilterDataSourceService) { }

    ngOnInit() {
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}