import { Directive, ElementRef, input } from '@angular/core';
import { StickyFooterService } from '../services/sticky-footer-service';

@Directive({
  selector: '[appSetMessage]'
})
export class SetMessage {

  observer!: IntersectionObserver;
  message = input<string>("")
  constructor(private stickyFooterService: StickyFooterService, private refElement: ElementRef) {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) stickyFooterService.text.set(this.message())
    })
  }
  ngAfterViewInit() {
    let target = this.refElement.nativeElement
    this.observer.observe(target)
  }
}
