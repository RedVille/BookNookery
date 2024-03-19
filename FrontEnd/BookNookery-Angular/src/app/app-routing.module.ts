import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./../app/components/home/home.component";
import { MainPageComponent } from "./../app/components/main-page/main-page.component";
import { BookDetailComponent } from "./../app/components/book-detail/book-detail.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: MainPageComponent,
    path: "mainPage"
  },
  {
    component: BookDetailComponent,
    path: "bookDetail"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}