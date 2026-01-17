import { Directive, ElementRef, input } from '@angular/core';
import { TAnimationAction } from '../Types/TAnimationAction';

@Directive({
  selector: '[appAnimation]'
})
export class Animation {
  //#region input
  action = input<TAnimationAction>("glow");
  ref = input<HTMLElement | undefined>(undefined)
  threshold = input<number | number[]>(.1)
  //#endregion
  //#region properties
  target!: HTMLElement | HTMLVideoElement
  observer!: IntersectionObserver;
  //#endregion

  constructor(private elementRef: ElementRef) {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) this.onView()
      else this.outView()
    }, { threshold: this.threshold() })

  }
  ngAfterViewInit() {
    this.target = this.ref() ? this.ref() : this.elementRef.nativeElement
    this.observer.observe(this.target)
  }
  swapAction() {
    if (this.action().includes("in")) return this.action().replace("in", "out")
    if (this.action().includes("out")) return this.action().replace("out", "in")
    return
  }
  onView() {
    this.elementRef.nativeElement.classList.add(this.action())
    this.elementRef.nativeElement.classList.remove(this.swapAction())

  }
  outView() {
    this.elementRef.nativeElement.classList.remove(this.action())
    this.elementRef.nativeElement.classList.add(this.swapAction())

  }

}
