import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SalesComponent } from "./sales/sales.component";

@NgModule({
  declarations: [HeaderComponent, SalesComponent],
  exports: [HeaderComponent, SalesComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
