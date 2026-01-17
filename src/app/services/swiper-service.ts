import { Injectable, signal, } from '@angular/core';
import { TSignalName } from '../Types/TSignalName';
import { Swiper } from 'swiper/types';

@Injectable({
  providedIn: 'root',
})
export class SwiperService {

  signals = {
    closerLook: signal<Swiper | undefined>(undefined),
    titanium: signal<Swiper | undefined>(undefined),
    cameraControl: signal<Swiper | undefined>(undefined),
    vivaResolution: signal<Swiper | undefined>(undefined),
  }
  setSignal(signalName: TSignalName, swiper: Swiper | undefined) {
    if (signalName) this.signals[signalName].set(swiper)
  }
  next(name: TSignalName) {
    if (name) {
      let swiper = this.signals[name]()
      swiper?.slideNext()
      return swiper?.isEnd
    }
    return false;
  }
  prev(name: TSignalName) {
    if (name) {
      let swiper = this.signals[name]()
      swiper?.slidePrev()
      return swiper?.isBeginning
    }
    return false;
  }
}
