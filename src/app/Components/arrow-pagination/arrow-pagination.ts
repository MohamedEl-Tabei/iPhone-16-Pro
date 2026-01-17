import { Component, input } from '@angular/core';
import { SwiperService } from '../../services/swiper-service';
import { TSignalName } from '../../Types/TSignalName';
import { Button } from "../button/button";

@Component({
  selector: 'app-arrow-pagination',
  imports: [Button],
  templateUrl: './arrow-pagination.html',
  styleUrl: './arrow-pagination.css',
})
export class ArrowPagination {
  isEnd: boolean | undefined = false
  isBeginning: boolean | undefined = true
  signalName = input<TSignalName>(undefined)
  constructor(private swiperService: SwiperService) {
  }
  onNextSlide() {
    const name = this.signalName()
    if (name) {
      this.isBeginning=false
      this.isEnd = this.swiperService.next(name)
    }

  }
  onPrevSlide() {
    const name = this.signalName()
    if (name) {
      this.isEnd=false;
      this.isBeginning = this.swiperService.prev(name)
      
    }
  }
}
