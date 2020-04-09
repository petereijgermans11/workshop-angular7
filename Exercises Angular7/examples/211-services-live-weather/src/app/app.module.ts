// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Custom Components
import { AppComponent } from './app.component';

// Import services
import { WeatherService } from './shared/services/weather.service';

// Module declaration
@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [WeatherService] // DI voor service
})
export class AppModule {}
