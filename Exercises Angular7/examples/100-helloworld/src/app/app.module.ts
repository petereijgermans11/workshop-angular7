// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Custom Components
import {AppComponent} from './app.component';
import { HelloComponent } from './hello/hello.component';

// Module declaration
@NgModule({
	imports     : [BrowserModule],
	declarations: [AppComponent, HelloComponent],
	bootstrap   : [AppComponent]
})
export class AppModule {
}


