import {FileHandlerService} from "./file-handler.service";
import {AppComponent} from "../app.component";
import {NgModule} from "@angular/core";
import {ListHandlerModule} from "../list-handler/list-handler.module";
import {IssueSearchModule} from "../issue-search/issue-search.module";
import {FileHandlerComponent} from "./file-handler.component";

@NgModule({
  providers: [FileHandlerService],
  imports: [ListHandlerModule, IssueSearchModule],
  declarations: [FileHandlerComponent],
  bootstrap: [AppComponent]
})

export class FileHandlerModule {}
