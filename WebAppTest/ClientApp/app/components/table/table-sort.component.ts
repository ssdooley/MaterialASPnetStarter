import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSort } from '@angular/material';
import { DatabaseService } from '../../services/database.service';
import { SortDataSource } from '../../models/sort-datasource.model';

@Component({
    selector: 'table-sort-usage',
    templateUrl: 'table-sort.component.html',
    styleUrls: ['table-sort.component.css'],
})
export class TableSortComponent implements OnInit {
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    dataSource: SortDataSource | null;

    @ViewChild(MdSort) sort: MdSort;

    constructor(private dbService: DatabaseService) { }

    ngOnInit() {
        this.dataSource = new SortDataSource(this.dbService, this.sort);
    }
}