import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComposersComponent } from "./components/composers/composers.component";
import { HomeComponent } from "./components/home/home.component";
import { ComposerDetailComponent } from "./components/composer-detail/composer-detail.component";

const routes: Routes = [
  {
    path: "composers",
    component: ComposersComponent,
  },
  { path: "composer-details/:id", component: ComposerDetailComponent },

  {
    path: "**",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
