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


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        PrismComponent,
        AllTablesComponent,
        TableBasicComponent,
        TableMenuComponent
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
            { path: 'all-tables', component: AllTablesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
