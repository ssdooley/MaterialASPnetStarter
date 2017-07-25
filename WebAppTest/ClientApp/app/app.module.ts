import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin },
        ...sharedConfig.providers
    ]
})
export class AppModule {
}
