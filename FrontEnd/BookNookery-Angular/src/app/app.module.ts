import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./../app/app-routing.module";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SplashScreenComponent } from "./../app/components/splashscreen/splashscreen.component";
import { HomeComponent } from "./../app/components/home/home.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, SplashScreenComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}