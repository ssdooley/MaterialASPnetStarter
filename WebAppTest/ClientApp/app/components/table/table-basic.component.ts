import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { BasicDataSourceService } from '../../services/basic-datasource.service';

@Component({
    selector: 'table-basic-usage',
    templateUrl: './table-basic.component.html',
    styleUrls: ['./table-basic.component.css'],
    providers: [BasicDataSourceService]
})
export class TableBasicComponent {
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    constructor(private dataSource: BasicDataSourceService) { }
}