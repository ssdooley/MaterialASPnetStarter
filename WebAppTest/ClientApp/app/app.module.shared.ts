import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app.module.material';

import { ThemeService } from './services/theme.service';
import { DatabaseService } from './services/database.service';
import { BasicDataSourceService } from './services/basic-datasource.service';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { PrismComponent } from './components/prism/prism.component';

import { AllTablesComponent } from './components/table/all-tables.component';
import { TableBasicComponent } from './components/table/table-basic.component';
import { TableMenuComponent } from './components/table/table-menu.component';
import { TableFilterComponent } from './components/table/table-filter.component';
import { TableSortComponent } from './components/table/table-sort.component';
import { TablePaginatorComponent } from './components/table/table-paginator.component';

import { ControlMenuComponent } from './components/controls/control-menu.component';
import { AutocompleteComponent } from './components/controls/autocomplete.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        PrismComponent,
        AllTablesComponent,
        TableBasicComponent,
        TableMenuComponent,
        TableFilterComponent,
        TableSortComponent,
        TablePaginatorComponent,
        AutocompleteComponent,
        ControlMenuComponent
    ],
    providers: [
        ThemeService,
        DatabaseService
    ],
    imports: [
        AppMaterialModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'table-menu', component: TableMenuComponent },
            { path: 'table-basic', component: TableBasicComponent },
            { path: 'table-filter', component: TableFilterComponent },
            { path: 'table-sort', component: TableSortComponent },
            { path: 'table-paginator', component: TablePaginatorComponent },
            { path: 'control-menu', component: ControlMenuComponent },
            { path: 'auto-complete', component: AutocompleteComponent },
            { path: 'all-tables', component: AllTablesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
