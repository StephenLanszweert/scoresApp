import { Component, OnInit } from "@angular/core";
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore/public_api";
import { Observable } from "rxjs";

@Component({
  selector: "app-composers",
  templateUrl: "./composers.component.html",
  styleUrls: ["./composers.component.scss"],
})
export class ComposersComponent implements OnInit {
  composers: any[];
  items: Observable<any[]>;
  constructor(private dbService: AngularFirestore) {}

  ngOnInit() {
    this.items = this.dbService.collection("/composers").valueChanges();
    console.log(this.items);
    // TODO: implement pagination for composers and parts
    this.composers = [];
    for (var i = 0; i < 50; i++) {
      this.composers.push({ id: i, name: "Mozart" });
    }
  }
}
