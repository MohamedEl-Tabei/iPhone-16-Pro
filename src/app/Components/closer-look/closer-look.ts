import { Component, ElementRef, viewChild,  } from '@angular/core';
import { BaseSlider } from "../base-slider/base-slider";
import { SlideContent } from '../../Interfaces/slide-content';
import { SwiperService } from '../../services/swiper-service';
import { Animation } from "../../Directives/animation";

@Component({
  selector: 'app-closer-look',
  imports: [BaseSlider, Animation],
  templateUrl: './closer-look.html',
  styleUrl: './closer-look.css',
})
export class CloserLook {
  selectedColor = "colors"
  sectionRef=viewChild<ElementRef>("sectionRef")
  constructor(private swiperService: SwiperService) { }
  onChangeColor(color: string) {
    this.selectedColor = color;
    const slideNumber = this.colors.indexOf(color)

    this.swiperService.signals.closerLook()?.slideTo(slideNumber)
  }
  //#region data
  colors = [
    "colors", "Desert", "Natural", "White", "Black"
  ]
  slides: SlideContent[] = [
    {
      src: "images/Colors.jpg",
      isVideo: false
    },
    {
      src: "images/Desert.jpg",
      isVideo: false
    }, {
      src: "images/Natural.jpg",
      isVideo: false
    }, {
      src: "images/White.jpg",
      isVideo: false
    }, {
      src: "images/Black.jpg",
      isVideo: false
    },
  ]
  //#endregion
}
