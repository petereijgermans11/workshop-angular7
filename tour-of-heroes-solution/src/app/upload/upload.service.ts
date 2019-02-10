import {Injectable} from '@angular/core';
import { HeroService }  from '../hero.service';
import { Hero }         from '../hero';


@Injectable()
export class UploadService {

   
    constructor(
      private heroService: HeroService) {}

    public  CSVType: string  = ".csv";

    public getFile($event: any): File{
        return $event.target.files[0] as File;
      }

      public isCSVFile(file: File): boolean {
        return file.name.endsWith(this.CSVType);
      }

      public getDataRecordsArrayFromCSVFile(csvData: string): void {
        const csvRecordsArray = this.getCsvRecordsArray(csvData) as string[];
        const headerLength: number = this.getHeaderArray(csvRecordsArray).length;
        for (let i = 1; i < csvRecordsArray.length; i++) {
          const data = csvRecordsArray[i].split(',');
          this.addCsvData(data, headerLength);
        }
      }
    
      private addCsvData(data: string[], headerLength: number): void {
        if (this.isNumberOfColumnsIsEqualHeaderColumns(data, headerLength)) {
          const firstName = data[0];
          const lastName = data[1];
          const issues = parseInt(data[2]);
          const dateOfBirth = data[3];

            const name = lastName;
            this.heroService.addHero({ name, issues} as Hero)
            .subscribe();
        }
      }
    
      private isNumberOfColumnsIsEqualHeaderColumns(data: string[], headerLength: number): boolean {
        return data.length == headerLength;
      }
    
     
      private getHeaderArray(csvRecordsArr: string[]): string[] {
        const headers = csvRecordsArr[0].split(',');
        const headerArray = [];
        for (const header of headers) {
          headerArray.push(header);
        }
        return headerArray as string[];
      }

      private getCsvRecordsArray(csvData: string): string[] {
        return csvData.toString().split(/\r\n|\n/) as string[];
      }
    
      public readFile(file: File): FileReader {
        const reader: FileReader = new FileReader();
        reader.readAsText(file);
        return reader;
      }
}