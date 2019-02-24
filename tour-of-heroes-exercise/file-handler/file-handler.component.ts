import {Component, Inject, Output} from "@angular/core";
import {Record} from "../models/Record";
import {FileHandlerService} from "./file-handler.service";

@Component({
  selector: 'file-handler',
  templateUrl: './file-handler.component.html',
  styleUrls: ['./file-handler.component.css']
})

export class FileHandlerComponent{

  @Output()
  public listOfOutgoingRecords: Record[] = [];

  constructor(private fileHandlerService: FileHandlerService){}

  public uploadFile($event: any): void{
    this.listOfOutgoingRecords = this.fileHandlerService.getListOfRecordsFromCsv($event.target.files);
  }

}
