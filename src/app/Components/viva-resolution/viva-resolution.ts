import { Component } from '@angular/core';
import { ZoomSlider } from "../zoom-slider/zoom-slider";
import { Grid } from "../grid/grid";
import { BaseSlider } from "../base-slider/base-slider";
import { SlideContent } from '../../Interfaces/slide-content';
import { SwiperService } from '../../services/swiper-service';

@Component({
  selector: 'app-viva-resolution',
  imports: [ZoomSlider, Grid, BaseSlider],
  templateUrl: './viva-resolution.html',
  styleUrl: './viva-resolution.css',
})
export class VivaResolution {
  selctedButton: { text: string, description: string } = {
    text: "13 mm",
    description: "0.5x Ultra Wide"
  }
  activeSlide: number = 1
  //#region lifecycle
  constructor(public swiperService: SwiperService) { }
  ngAfterViewInit(){
    this.swiperService.signals.vivaResolution()?.slideTo(this.activeSlide)
  }
  //#endregion
  //#region event handler
  onClickBtn(slideNumber: number) {
    let swiper = this.swiperService.signals.vivaResolution()
    swiper?.slideTo(slideNumber)
    this.activeSlide = swiper?.activeIndex || 0

  }
  //#endregion
  //#region data 
  buttons: { text: string, description: string }[] = [
    {
      text: "Macro",
      description: "0.5x Macro"
    }, {
      text: "13 mm",
      description: "0.5x Ultra Wide"
    }, {
      text: "24 mm",
      description: "1x Fusion 24 mm"
    }, {
      text: "28 mm",
      description: "1.2x Fusion 28 mm"
    }, {
      text: "35 mm",
      description: "1.5x Fusion 35 mm"
    }, {
      text: "48 mm",
      description: "2x Telephoto"
    }, {
      text: "120 mm",
      description: "5x Telephoto"
    },
  ]
  slides: SlideContent[] = [
    {
      src: "images/macro.jpg",
      isVideo: false
    },
    {
      src: "images/13mm.jpg",
      isVideo: false
    },
    {
      src: "images/24mm.jpg",
      isVideo: false
    },
    {
      src: "images/28mm.jpg",
      isVideo: false
    },
    {
      src: "images/35mm.jpg",
      isVideo: false
    },
    {
      src: "images/48mm.jpg",
      isVideo: false
    },
    {
      src: "images/120mm.jpg",
      isVideo: false
    }
  ]
  //#endregion
}
