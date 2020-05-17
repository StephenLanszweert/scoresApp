import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LogoComponent } from "./components/logo/logo.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ComposersComponent } from "./components/composers/composers.component";
import { ComposerDetailComponent } from "./components/composer-detail/composer-detail.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    NavbarComponent,
    ComposersComponent,
    ComposerDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
