import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SlideContent } from '../../Interfaces/slide-content';
import { SwiperService } from '../../services/swiper-service';
import { TSignalName } from '../../Types/TSignalName';
import { Animation } from "../../Directives/animation";
import { Swiper } from 'swiper/types';
import { Button } from "../button/button";
import { VideoSrvice } from '../../services/video-srvice';

@Component({
  selector: 'app-base-slider',
  imports: [Animation, Button],
  templateUrl: './base-slider.html',
  styleUrl: './base-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseSlider {
  swiperRef = viewChild<ElementRef<SwiperContainer>>("swiperRef");
  swiper!: Swiper | undefined
  swiperElement!: SwiperContainer | undefined
  videoIcon = ""
  activeVideoIndex = 0
  //#region inputs
  slideWidth = input<string>("100%")
  slides = input<SlideContent[]>([]);
  signalName = input<TSignalName>(undefined)
  descriptions = input<string[]>([])
  classNames = input<string>("")
  rounded=input<boolean>(true)
  //#endregion
  //#region lifecyle
  constructor(private swiperService: SwiperService, private videoService: VideoSrvice) {
    this.videoIcon = videoService.icons.pauseIcon
  }
  ngAfterViewInit() {
    this.swiperElement = this.swiperRef()?.nativeElement
    this.swiper = this.swiperElement?.swiper
    this.swiperService.setSignal(this.signalName(), this.swiper)
  }
  //#endregion
  //#region slide change
  onSwiperslidechange() {
    const activeVideoElement = this.swiperElement?.children[this.swiper?.activeIndex || 0].firstChild as HTMLVideoElement
    if (activeVideoElement instanceof HTMLVideoElement) {
      if (this.activeVideoIndex > 0) {
        const activeVideo = this.swiperElement?.children[this.activeVideoIndex].firstChild as HTMLVideoElement
        if (activeVideo instanceof HTMLVideoElement) activeVideo.pause()
      }
      this.videoIcon = this.videoService.icons.pauseIcon
      this.activeVideoIndex = this.swiper?.activeIndex || 0
      activeVideoElement.play()
    }
  }
  //#endregion
  //#region video
  onToggleVideo() {
    const activeVideo = this.swiperElement?.children[this.activeVideoIndex].firstChild as HTMLVideoElement
    this.videoIcon = this.videoService.toggle(activeVideo)
  }
  onVideoEnded() {
    this.videoIcon = this.videoService.icons.restartIcon
  }
  //#endregion




}
