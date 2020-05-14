import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-composers",
  templateUrl: "./composers.component.html",
  styleUrls: ["./composers.component.scss"],
})
export class ComposersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("test");
  }
}
