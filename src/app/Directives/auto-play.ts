import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoPlay]'
})
export class AutoPlay {
  observer!: IntersectionObserver
  constructor(private videoRef: ElementRef<HTMLVideoElement>) {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) videoRef.nativeElement.play()
      else videoRef.nativeElement.pause()
    })
  }
  ngAfterViewInit() {
    this.observer.observe(this.videoRef.nativeElement)
  }
}
