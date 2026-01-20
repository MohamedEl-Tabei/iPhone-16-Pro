import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Navbar } from "./Components/navbar/navbar";
import { Hero } from "./Components/hero/hero";
import { StickyNavbar } from "./Components/sticky-navbar/sticky-navbar";
import { Highlights } from "./Components/highlights/highlights";
import { CloserLook } from "./Components/closer-look/closer-look";
import { Titanium } from "./Components/titanium/titanium";
import { CameraControl } from "./Components/camera-control/camera-control";
import { Vision4k } from "./Components/vision4k/vision4k";
import { VivaResolution } from "./Components/viva-resolution/viva-resolution";
import { StickyFooter } from "./Components/sticky-footer/sticky-footer";
import { PhotographicStyle } from "./Components/photographic-style/photographic-style";
import { Animation } from "./Directives/animation";
import { StickyFooterService } from './services/sticky-footer-service';
import { SetMessage } from "./Directives/set-message";
import { BatteryLife } from "./Components/battery-life/battery-life";
import { Footer } from "./Components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, StickyNavbar, Highlights, CloserLook, Titanium, CameraControl, Vision4k, VivaResolution, StickyFooter, PhotographicStyle, Animation, SetMessage, BatteryLife, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('iPhone-16-Pro');
  constructor(public stickyFooterService:StickyFooterService){}
  //#region Ref
  heroRef=viewChild<ElementRef<HTMLElement>>("heroRef")
  footerRef=viewChild<ElementRef<HTMLElement>>("footerRef")
  //#endregion
  ngAfterViewInit(){
  document.body.scrollIntoView({ behavior: "smooth" })

  }
}
