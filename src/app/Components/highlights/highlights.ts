import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Animation } from "../../Directives/animation";
import { Button } from "../button/button";

@Component({
  selector: 'app-highlights',
  imports: [Animation, Button],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Highlights {
  playIcon = "m23.7555 36.6237c.4478 0 .8598-.1343 1.4241-.4568l10.9178-6.3322c.8598-.5016 1.3614-1.021 1.3614-1.8361 0-.8061-.5016-1.3255-1.3614-1.8271l-10.9178-6.3322c-.5643-.3314-.9762-.4657-1.4241-.4657-.9315 0-1.7555.7165-1.7555 1.9435v13.3629c0 1.227.824 1.9435 1.7555 1.9435z"
  restartIcon = "m36.2448 26.6447c-1.1073 0-2.0052.8978-2.0052 2.0052 0 3.4405-2.7992 6.2397-6.2397 6.2397s-6.2397-2.7992-6.2397-6.2397 2.7992-6.2397 6.2397-6.2397c.0283 0 .0546-.0072.0825-.0083l-1.2839 1.2841c-.7833.7828-.7833 2.0526 0 2.8354.3911.3916.9047.5874 1.4177.5874s1.0266-.1958 1.4177-.5874l4.4406-4.4406c.7833-.7828.7833-2.0526 0-2.8354l-4.657-4.657c-.7823-.7833-2.0531-.7833-2.8354 0-.7833.7828-.7833 2.0526 0 2.8354l.9973.9974c-5.4561.223-9.8295 4.7189-9.8295 10.2287 0 5.6517 4.5983 10.25 10.25 10.25s10.25-4.5983 10.25-10.25c0-1.1073-.8978-2.0052-2.0052-2.0052z"
  pauseIcon = "m21.7334 36.67h2.5342c1.1483 0 1.7324-.5796 1.7324-1.7193v-13.9015c0-1.12-.5841-1.6898-1.7324-1.7193h-2.5342c-1.1483 0-1.7324.5698-1.7324 1.7193v13.9015c-.0297 1.1396.5544 1.7193 1.7324 1.7193zm9.9992 0h2.5347c1.1485 0 1.7327-.5796 1.7327-1.7193v-13.9015c0-1.12-.5842-1.7193-1.7327-1.7193h-2.5347c-1.1485 0-1.7327.5698-1.7327 1.7193v13.9015c0 1.1396.5545 1.7193 1.7327 1.7193z"
  icon = "m21.7334 36.67h2.5342c1.1483 0 1.7324-.5796 1.7324-1.7193v-13.9015c0-1.12-.5841-1.6898-1.7324-1.7193h-2.5342c-1.1483 0-1.7324.5698-1.7324 1.7193v13.9015c-.0297 1.1396.5544 1.7193 1.7324 1.7193zm9.9992 0h2.5347c1.1485 0 1.7327-.5796 1.7327-1.7193v-13.9015c0-1.12-.5842-1.7193-1.7327-1.7193h-2.5347c-1.1485 0-1.7327.5698-1.7327 1.7193v13.9015c0 1.1396.5545 1.7193 1.7327 1.7193z"
  timeLeftPercent = signal("0%");
  activeSlide: number = 0
  swiperRef = viewChild<ElementRef<SwiperContainer>>("swiperRef");
  setionRef = viewChild<ElementRef<HTMLElement>>("setionRef");
  enterClass = signal("fade-in-bottom")
  onSwiperslidechange() {
    let swiper = this.swiperRef()?.nativeElement.swiper
    this.activeSlide = swiper?.activeIndex || 0
    const slideRef = this.swiperRef()?.nativeElement.children[this.activeSlide]?.firstChild
    if (slideRef?.nodeName == "VIDEO") {
      const video = slideRef as HTMLVideoElement
      if (!video.played.length)
        video.play();
    }



  }
  onSwap(slideNum: number) {
    let swiper = this.swiperRef()?.nativeElement.swiper;
    if (swiper?.activeIndex != slideNum) {
      swiper?.slideTo(slideNum)
      swiper?.autoplay.stop();
      this.icon = this.playIcon
      this.timeLeftPercent.set(`0%`)
    }
  }
  onSwiperautoplaytimeleft() {
    let swiper = this.swiperRef()?.nativeElement.swiper
    let time = 5000 - (swiper?.autoplay.timeLeft || 0)
    this.timeLeftPercent.set(`${time * 100 / 5000}%`)
    if (swiper?.isEnd && time >= 5000) {
      swiper.autoplay.stop();
      this.icon = this.restartIcon
    }
  }
  onTogglePlay() {
    let swiper = this.swiperRef()?.nativeElement.swiper
    if (swiper?.isEnd && !swiper?.autoplay.paused && !swiper?.autoplay.running) {
      swiper.slideTo(0)
    }
    if (!swiper?.autoplay.running) {
      this.icon = this.pauseIcon
      swiper?.autoplay.start()
      swiper?.autoplay.resume()

    }
    else if (swiper?.autoplay.paused) {
      this.icon = this.pauseIcon
      swiper?.autoplay.resume()
    } else {
      this.icon = this.playIcon
      swiper?.autoplay.pause()

    }

  }
  onHidden() {
    this.swiperRef()?.nativeElement.swiper?.autoplay.stop();
    this.icon = this.playIcon
    this.timeLeftPercent.set(`0%`)
  }
  onVisible() {
    this.swiperRef()?.nativeElement.swiper?.autoplay.start();
    this.swiperRef()?.nativeElement.swiper?.autoplay.resume();
    this.icon = this.pauseIcon

  }
  //#region Data
  slides: {
    descriptions: string[];
    src: string;
    isVideo: boolean;
  }[]
    = [
      {
        descriptions: ["So fast. So fluid.", "Get a feel for the all-new", "Camera Control."],
        isVideo: true,
        src: "/videos/highlight1.mp4"
      }, {
        descriptions: ["4K 120 fps Dolby Vision.", "4 studio-quality mics.", "A Pro studio in your pocket."],
        isVideo: true,
        src: "/videos/highlight2.mp4"
      }, {
        descriptions: ["Thinner borders — for even", "larger displays. Brilliant.",],
        isVideo: false,
        src: "/images/highlight3.jpg"
      }, {
        descriptions: ["All-new A18 Pro chip. Unrivaled", "performance. Unprecedented", "efficiency."],
        isVideo: true,
        src: "/videos/highlight4.mp4"
      }, {
        descriptions: ["A huge leap in battery life.", "Game on."],
        isVideo: false,
        src: "/images/highlight5.jpg"
      }, {
        descriptions: ["The first iPhone designed", "for Apple Intelligence.", "Personal, private, powerful."],
        isVideo: true,
        src: "/videos/highlight6.mp4"
      }
    ]


  //#endregion
}


