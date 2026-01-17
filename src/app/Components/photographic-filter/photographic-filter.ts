import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-photographic-filter',
  imports: [],
  templateUrl: './photographic-filter.html',
  styleUrl: './photographic-filter.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotographicFilter {
  swiperRef = viewChild<ElementRef<SwiperContainer>>("swiperRef");
  swiper!: Swiper | undefined
  swiperElement!: SwiperContainer | undefined
  isEnd = false
  filters = ["", "brightness", "grayscale"]
  ngAfterViewInit() {
    this.swiperElement = this.swiperRef()?.nativeElement
    this.swiper = this.swiperElement?.swiper
    this.swiper?.mousewheel.enable()
  }
  onScrollFilterTop(event: WheelEvent) {
    this.isEnd = false
    if (this.swiper?.isBeginning) this.swiper.mousewheel.disable()
    else {
      this.swiperElement?.scrollIntoView({ behavior: "smooth" })
      event.preventDefault()
      this.swiper?.mousewheel.enable()
    }
  }
  onScrollFilterBottom(event: WheelEvent) {
    this.isEnd = this.swiper?.isEnd || false
    if (this.swiper?.isEnd) this.swiper.mousewheel.disable()
    else {
      this.swiperElement?.scrollIntoView({ behavior: "smooth" })
      event.preventDefault()
      this.swiper?.mousewheel.enable()
    }
  }
  setFilterStyle() {
    if (this.swiper?.mousewheel.enabled || this.swiper?.isBeginning) this.swiperElement?.style.setProperty("width", "100%")
    else this.swiperElement?.style.setProperty("width", "80%")
  }
  onScrollFilter(event: Event) {
    let evnt = event as WheelEvent
    if (evnt.deltaY < 0) this.onScrollFilterTop(evnt)
    else this.onScrollFilterBottom(evnt)
    this.setFilterStyle()
  }
}
