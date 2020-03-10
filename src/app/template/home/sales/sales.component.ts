import { Component, OnInit } from "@angular/core";
import { QueryService } from "../../service/query.service";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"]
})
export class SalesComponent implements OnInit {

  constructor(private service: QueryService) { }
  title = "phm";
  api;
  ngOnInit(): void {
    this.service.listApi("eventos").subscribe(ev => {
      console.log(ev);
      this.api = ev;
    });
  }
}
