import { Component } from '@angular/core';
import { BaseSlider } from "../base-slider/base-slider";
import { SlideContent } from '../../Interfaces/slide-content';
import { ArrowPagination } from "../arrow-pagination/arrow-pagination";

@Component({
  selector: 'app-titanium-slider',
  imports: [BaseSlider, ArrowPagination],
  templateUrl: './titanium-slider.html',
  styleUrl: './titanium-slider.css',
})
export class TitaniumSlider {

  //#region Data
  descriptions = ["iPhone 16 Pro Max has our largest iPhone display ever", "The thinnest borders on any Apple product", "Premium Grade 5 titanium is exceptionally durable", "Four striking colors, from Black Titanium to new Desert Titanium"]
  slides: SlideContent[] = [
    {
      src: "images/Titanium1.jpg",
      isVideo: false
    }, {
      src: "images/Titanium2.jpg",
      isVideo: false
    }, {
      src: "images/Titanium3.jpg",
      isVideo: false
    }, {
      src: "images/Titanium4.jpg",
      isVideo: false
    },
  ]
  //#endregion
}
