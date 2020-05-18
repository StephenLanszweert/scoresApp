import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-composers",
  templateUrl: "./composers.component.html",
  styleUrls: ["./composers.component.scss"],
})
export class ComposersComponent implements OnInit {
  composers: any[];
  constructor(private dbService: AngularFirestore) {}

  ngOnInit() {
    this.dbService
      .collection("/composers", (ref) => ref.orderBy("name"))
      .valueChanges()
      .subscribe((data) => {
        console.log(data);
        this.composers = data;
      });
    // TODO: implement pagination for composers and parts
  }
}
