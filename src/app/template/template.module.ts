import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { HeaderComponent } from "./home/header/header.component";
import { SalesComponent } from "./home/sales/sales.component";

@NgModule({
  declarations: [], exports: [HeaderComponent, SalesComponent],
  imports: [CommonModule, HttpClientModule, HomeModule]
})
export class TemplateModule { }
