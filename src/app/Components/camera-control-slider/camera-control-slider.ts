import { Component } from '@angular/core';
import { SlideContent } from '../../Interfaces/slide-content';
import { BaseSlider } from "../base-slider/base-slider";
import { ArrowPagination } from "../arrow-pagination/arrow-pagination";

@Component({
  selector: 'app-camera-control-slider',
  imports: [BaseSlider, ArrowPagination],
  templateUrl: './camera-control-slider.html',
  styleUrl: './camera-control-slider.css',
})
export class CameraControlSlider {
  //#region data
  descriptions = [
    "Click to launch the Camera app.Click again to instantly take a photo.",
    "Click and hold to start recording video.",
    "A light press opens controls like zoom.",
    "With a double light press, you can select another camera setting. Then slide to adjust that setting."
  ]
  slides: SlideContent[] = [
    {
      src: "videos/CameraControl (3).mp4",
      isVideo: true
    }, {
      src: "videos/CameraControl (4).mp4",
      isVideo: true
    }, {
      src: "videos/CameraControl (1).mp4",
      isVideo: true
    }, {
      src: "videos/CameraControl (2).mp4",
      isVideo: true
    },
  ]

  //#endregion
}
