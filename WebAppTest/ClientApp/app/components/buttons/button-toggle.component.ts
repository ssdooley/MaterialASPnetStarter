import { Component } from '@angular/core';
import { Theme } from '../../models/theme.model';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'button-toggle-usage',
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent {
    themes: Array<Theme>;

    constructor(private themeService: ThemeService) {
        this.themes = this.themeService.getThemes();
    }

    setTheme(theme: Theme) {
        this.themeService.setTheme(theme);
    }
}