import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Theme } from '../../models/theme.model';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector: 'autocomplete-usage',
    templateUrl: './autocomplete.component.html'
})
export class AutocompleteComponent {
    themeCtrl: FormControl;
    themes: Array<Theme>;
    filteredThemes: Observable<Array<Theme>>;

    constructor(private themeService: ThemeService) {
        this.themeCtrl = new FormControl();
        this.themes = themeService.getThemes();
        this.filteredThemes = this.themeCtrl.valueChanges
            .startWith(null)
            .map(name => this.filterThemes(name));
    }

    filterThemes(val: Theme | string) {
        if (!(val)) {
            return this.themes;
        }

        if (typeof val == "object") {
            if (val && this.themes.indexOf(val) > -1) {
                this.themeService.setTheme(val);
            }
            return this.themes.filter(t => t.display.toLowerCase().indexOf(val.display.toLowerCase()) === 0);
        } else {
            this.themes.forEach(t => {
                if (t.display.toLowerCase().indexOf(val.toLowerCase()) === 0) {
                    this.themeService.setTheme(t);
                }
            });

            return this.themes.filter(t => t.display.toLowerCase().indexOf(val.toLowerCase()) === 0);
        }
    }

    displayTheme(val: Theme) {
        return val ? val.display : val;
    }
}