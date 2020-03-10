import { QueryService } from "./template/service/query.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private service: QueryService) { }
  title = "phm";
  api;
  ngOnInit(): void {
    this.service.listApi("casas").subscribe(ev => {
      console.log(ev);
      this.api = ev;
    });
  }
}
