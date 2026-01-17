import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-zoom-slider',
  imports: [],
  templateUrl: './zoom-slider.html',
  styleUrl: './zoom-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZoomSlider {
  swiperRefScreen = viewChild<ElementRef<SwiperContainer>>("swiperRefScreen");
  swiperRefControl = viewChild<ElementRef<SwiperContainer>>("swiperRefControl");
  swiperScreen!: Swiper | undefined
  swiperElementScreen!: SwiperContainer | undefined
  swiperControl!: Swiper | undefined
  swiperElementControl!: SwiperContainer | undefined
  src = input<string>()
  text = input<string>()
  isVideo = input<boolean>(false)
  ratio = 2.5
  isBegining = false
  activeIndex = 0
  ngAfterViewInit() {
    this.swiperElementScreen = this.swiperRefScreen()?.nativeElement
    this.swiperScreen = this.swiperElementScreen?.swiper
    this.swiperElementControl = this.swiperRefControl()?.nativeElement
    this.swiperControl = this.swiperElementControl?.swiper
    this.swiperControl?.mousewheel.enable()
    this.swiperScreen?.zoom.in(this.ratio)
  }
  onScrollTop(event: WheelEvent) {
    if (this.swiperControl?.progress) {
      const r = this.swiperControl?.progress;
      this.swiperScreen?.zoom.in(this.ratio - r)
    }
    if (this.swiperControl?.isBeginning) this.swiperControl.mousewheel.disable()
    else {
      this.swiperElementControl?.scrollIntoView({ behavior: "smooth" })
      event.preventDefault()
      this.swiperControl?.mousewheel.enable()
    }
  }
  onScrollBottom(event: WheelEvent) {
    if (this.swiperControl?.progress) {
      const r = this.swiperControl?.progress;
      this.swiperScreen?.zoom.in(this.ratio - r - .5)
    }
    if (this.swiperControl?.isEnd) this.swiperControl.mousewheel.disable()
    else {
      this.swiperElementControl?.scrollIntoView({ behavior: "smooth" })
      event.preventDefault()
      this.swiperControl?.mousewheel.enable()
    }
  }
  onScroll(event: Event) {
    let evnt = event as WheelEvent
    this.activeIndex = this.swiperControl?.activeIndex || 0
    if (evnt.deltaY < 0) this.onScrollTop(evnt)
    else this.onScrollBottom(evnt)
  }

}
