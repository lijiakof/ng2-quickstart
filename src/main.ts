import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HelloWorld } from './app/hello-world';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloWorld ],
    bootstrap: [ HelloWorld ]
})
export class Main {}

platformBrowserDynamic().bootstrapModule(Main);