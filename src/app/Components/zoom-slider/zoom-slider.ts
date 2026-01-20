import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-zoom-slider',
  imports: [],
  templateUrl: './zoom-slider.html',
  styleUrl: './zoom-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ZoomSlider {
  swiperRefScreen = viewChild<ElementRef<SwiperContainer>>('swiperRefScreen');
  swiperScreen!: Swiper | undefined;
  swiperElementScreen!: SwiperContainer | undefined;
  child = input<number>(1);
  src = input<string>();
  text = input<string>();
  isVideo = input<boolean>(false);
  showText = signal<boolean>(true);
  ngAfterViewInit() {
    this.swiperElementScreen = this.swiperRefScreen()?.nativeElement;
    this.swiperScreen = this.swiperElementScreen?.swiper;
    this.swiperScreen?.zoom.in(2.5);
    window.addEventListener('scroll', this.onScroll);
  }
 
  onScroll = (event: Event) => {
    let y = window.scrollY;
    if (this.child() == 1) {
      if (y < 8800) {
        this.showText.set(true);
        this.swiperScreen?.zoom.in(2.5);
      } else if (y < 9000) this.swiperScreen?.zoom.in(2);
      else if (y < 9200) {
        this.swiperScreen?.zoom.in(1.5);
        this.showText.set(false);
      } else if (y < 9300) this.swiperScreen?.zoom.in(1.25);
      else if (y < 9500) this.swiperScreen?.zoom.in(1);
    }

    if (this.child() == 2) {
      if (y < 12500) {
        this.showText.set(true);
        this.swiperScreen?.zoom.in(2.5);
      } else if (y < 12700) this.swiperScreen?.zoom.in(2);
      else if (y < 12900) {
        this.swiperScreen?.zoom.in(1.5);
        this.showText.set(false);
      } else if (y < 13000) this.swiperScreen?.zoom.in(1.25);
      else if (y < 13300) this.swiperScreen?.zoom.in(1);
    }
  };
}
