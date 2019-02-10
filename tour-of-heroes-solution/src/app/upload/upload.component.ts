import { Component } from '@angular/core';
import { UploadService }  from './upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: []
})


export class UploadComponent {

  constructor(
    private uploadService: UploadService
  ) {}

  public fileUploadListener($event: any): void {

    const file: File = this.uploadService.getFile($event) as File;
    if (this.uploadService.isCSVFile(file)) {
        const reader = this.uploadService.readFile(file);
        reader.onload = () => {
          const csvData: string = reader.result as string;
          this.uploadService.getDataRecordsArrayFromCSVFile(csvData);
        }
    
        reader.onerror = function() {
          alert('Unable to read ' + file.name);
        };

    } else {
      alert("Please import valid .csv file.");
    }
  }


}

