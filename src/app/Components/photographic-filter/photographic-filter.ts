import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-photographic-filter',
  imports: [],
  templateUrl: './photographic-filter.html',
  styleUrl: './photographic-filter.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PhotographicFilter {
  swiperRef = viewChild<ElementRef<SwiperContainer>>('swiperRef');
  swiper!: Swiper | undefined;
  swiperElement!: SwiperContainer | undefined;
  isEnd = false;
  filters = ['', 'brightness', 'grayscale'];
  ngAfterViewInit() {
    this.swiperElement = this.swiperRef()?.nativeElement;
    this.swiper = this.swiperElement?.swiper;
    
    console.log(this.swiper?.allowTouchMove);
    
    window.addEventListener('scroll', this.onScrollFilter);
  }
  setFilterStyle() {
    if (!this.swiper?.isEnd) this.swiperElement?.style.setProperty('width', '100%');
    else this.swiperElement?.style.setProperty('width', '80%');
  }
  onScrollFilter = (event: Event) => {
    const start = 16600;
    const end = 18000;

    let y = window.scrollY;

    let progress = (y - start) / (end - start);
    progress = Math.min(Math.max(progress, 0), 1);

    this.swiper?.setProgress(progress);

      this.setFilterStyle();
  };
 
}
