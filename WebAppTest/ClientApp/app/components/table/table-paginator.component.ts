import { Component, ViewChild, OnInit } from '@angular/core';
import { MdPaginator } from '@angular/material';
import { PaginatorDataSource } from '../../models/paginator-datasource.model';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'table-paginator-usage',
    templateUrl: './table-paginator.component.html',
    styleUrls: ['./table-paginator.component.css']
})
export class TablePaginatorComponent implements OnInit {
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    dataSource: PaginatorDataSource | null;
    @ViewChild(MdPaginator) paginator: MdPaginator;

    constructor(private dbService: DatabaseService) {}

    ngOnInit() {
        this.dataSource = new PaginatorDataSource(this.dbService, this.paginator);
    }
}