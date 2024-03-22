import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./../app/app-routing.module";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SplashScreenComponent } from "./../app/components/splashscreen/splashscreen.component";
import { HomeComponent } from "./../app/components/home/home.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CarouselModule } from "primeng/carousel";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [AppComponent, SplashScreenComponent, HomeComponent, FooterComponent, HeaderComponent, MainPageComponent, BookDetailComponent, LoginComponent, SignupComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}