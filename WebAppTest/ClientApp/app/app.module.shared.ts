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
import { TableCompleteComponent } from './components/table/table-complete.component';

import { ControlMenuComponent } from './components/controls/control-menu.component';
import { AutocompleteComponent } from './components/controls/autocomplete.component';
import { CheckboxComponent } from './components/controls/checkbox.component';
import { DatepickerComponent } from './components/controls/datepicker.component';
import { InputComponent } from './components/controls/input.component';
import { RadioComponent } from './components/controls/radio.component';
import { SelectComponent } from './components/controls/select.component';
import { SliderComponent } from './components/controls/slider.component';
import { SlideToggleComponent } from './components/controls/slidetoggle.component';

import { SidenavComponent } from './components/navigation/sidenav.component';
import { DemoSidenavComponent } from './components/navigation/demo-sidenav.component';
import { MenuComponent } from './components/navigation/menu.component';
import { ToolbarComponent } from './components/navigation/toolbar.component';

import { ListComponent } from './components/layout/list.component';


export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
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
        TableCompleteComponent,
        AutocompleteComponent,
        ControlMenuComponent,
        CheckboxComponent,
        DatepickerComponent,
        InputComponent,
        RadioComponent,
        SelectComponent,
        SliderComponent,
        SlideToggleComponent,
        SidenavComponent,
        DemoSidenavComponent,
        MenuComponent,
        ToolbarComponent,
        ListComponent,
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
            { path: 'table-complete', component: TableCompleteComponent },
            { path: 'control-menu', component: ControlMenuComponent },
            { path: 'auto-complete', component: AutocompleteComponent },
            { path: 'checkbox-card', component: CheckboxComponent },
            { path: 'date-picker', component: DatepickerComponent },
            { path: 'input-form', component: InputComponent },
            { path: 'radio-dial', component: RadioComponent },
            { path: 'select-list', component: SelectComponent },
            { path: 'slider-control', component: SliderComponent },
            { path: 'slider-toggle', component: SlideToggleComponent },
            { path: 'sidenav-item', component: SidenavComponent },
            { path: 'menu-item', component: MenuComponent },
            { path: 'toolbar-item', component: ToolbarComponent },
            { path: 'list-item', component: ListComponent },
            { path: 'all-tables', component: AllTablesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
