import { Component } from '@angular/core';
import { MdSelectChange } from '@angular/material';
import { Theme } from '../../models/theme.model';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'select-usage',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent {
    themes: Array<Theme>;

    constructor(private themeService: ThemeService) {
        this.themes = this.themeService.getThemes();
    }

    setTheme(event: MdSelectChange) {
        this.themeService.setTheme(event.value);
    }
}