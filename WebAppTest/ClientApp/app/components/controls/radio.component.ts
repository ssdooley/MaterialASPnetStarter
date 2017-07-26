import { Component } from '@angular/core';
import { MdRadioChange } from '@angular/material';
import { Theme } from '../../models/theme.model';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'radio-usage',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css']
})
export class RadioComponent {
    themes: Array<Theme>;

    constructor(private themeService: ThemeService) {
        this.themes = this.themeService.getThemes();
    }

    setTheme(event: MdRadioChange) {
        this.themeService.setTheme(event.value);
    }
}