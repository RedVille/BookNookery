import { Component, OnInit } from "@angular/core";

@Component({
  selector: "splashscreen",
  templateUrl: "./splashscreen.component.html",
  styleUrls: ["./splashscreen.component.css"]
})
export class SplashScreenComponent implements OnInit {
  windowWidth: string | undefined;
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 1000);
  }
}