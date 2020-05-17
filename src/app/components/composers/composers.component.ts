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
  items: Observable<any[]>;
  constructor(private dbService: AngularFirestore) {}

  ngOnInit() {
    this.dbService
      .collection("/composers")
      .valueChanges()
      .subscribe((data) => {
        console.log(data);
        // this.items = data;
      });
    console.log(this.items);
    // TODO: implement pagination for composers and parts
    this.composers = [];
    for (var i = 0; i < 50; i++) {
      this.composers.push({ id: i, name: "Mozart" });
    }
  }
}
