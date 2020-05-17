import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-composer-detail",
  templateUrl: "./composer-detail.component.html",
  styleUrls: ["./composer-detail.component.scss"],
})
export class ComposerDetailComponent implements OnInit {
  id: number;
  sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    console.log(this.id);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
