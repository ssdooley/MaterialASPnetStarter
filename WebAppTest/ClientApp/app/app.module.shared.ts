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
import { GridListComponent } from './components/layout/grid-list.component';
import { CardComponent } from './components/layout/card.component';
import { TabsComponent } from './components/layout/tabs.component';

import { ButtonComponent } from './components/buttons/button.component';
import { ButtonToggleComponent } from './components/buttons/button-toggle.component';
import { ChipComponent } from './components/buttons/chip.component';
import { IconComponent } from './components/buttons/icon.component';
import { ProgressSpinnerComponent } from './components/buttons/progress-spinner.component';
import { ProgressBarComponent } from './components/buttons/progress-bar.component';
import { DialogComponent } from './components/popupsmodals/dialog.component';
import { TooltipComponent } from './components/popupsmodals/tooltip.component';
import { SnackbarComponent } from './components/popupsmodals/snackbar.component';
import { ExampleDialogComponent } from './components/popupsmodals/example-dialog.component';
import { ExampleSnackbarComponent } from './components/popupsmodals/example-snackbar.component';

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
        GridListComponent,
        CardComponent,
        TabsComponent,
        ButtonComponent,
        ButtonToggleComponent,
        ChipComponent,
        IconComponent,
        ProgressSpinnerComponent,
        ProgressBarComponent,
        DialogComponent,
        TooltipComponent,
        SnackbarComponent,
        ExampleDialogComponent,
        ExampleSnackbarComponent
    ],

    entryComponents: [
        ExampleDialogComponent,
        ExampleSnackbarComponent
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
            { path: 'grid-list', component: GridListComponent },
            { path: 'card-item', component: CardComponent },
            { path: 'tab-item', component: TabsComponent },
            { path: 'button-item', component: ButtonComponent },
            { path: 'button-toggle', component: ButtonToggleComponent },
            { path: 'icon-item', component: IconComponent },
            { path: 'chip-item', component: ChipComponent },
            { path: 'progress-spinner', component: ProgressSpinnerComponent },
            { path: 'progress-bar', component: ProgressBarComponent },
            { path: 'all-tables', component: AllTablesComponent },
            { path: 'dialog-item', component: DialogComponent },
            { path: 'tooltip-item', component: TooltipComponent },
            { path: 'snackbar-item', component: SnackbarComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
