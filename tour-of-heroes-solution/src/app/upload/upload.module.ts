import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UploadComponent } from './upload.component';

@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [UploadComponent]
})
export class UploadModule { }
