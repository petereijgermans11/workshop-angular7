import {Injectable} from "@angular/core";
import {Record} from "../models/Record";

@Injectable()
export class FileHandlerService {

  constructor() {}

  getListOfRecordsFromCsv(fileList: FileList){
    const listOfRecords: Record[] = [];
    const fileReader: FileReader = new FileReader();

    console.log("reading csv file");

    if(fileList.length > 0){

      fileReader.readAsText(fileList.item(0), "UTF-8");
      fileReader.onload = () => {
        const readerResult: string = fileReader.result as string;
        const records: string[] = readerResult.split(/\r\n|\n|\r/);

        for(const recordline in records){
          const line: string[] = records[recordline].split(',');
          const record: Record = new Record();
          record.firstName = line[0];
          record.surName = line[1];
          record.issueCount = line[2];
          record.dateOfBirth = line[3];
          listOfRecords.push(record);
        }
      };
    }
    return listOfRecords;
  }

}
