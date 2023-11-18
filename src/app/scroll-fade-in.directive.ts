import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appScrollFadeIn]',
})
export class ScrollFadeInDirective implements AfterViewInit {
  @Input() animationStyle:
    | 'left-right'
    | 'right-left'
    | 'fade-in'
    | 'top-bottom'
    | 'bottom-top';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.applyAnimationStyle(); // Aufruf dieser Methode
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }

  private applyAnimationStyle() {
    switch (this.animationStyle) {
      case 'left-right':
        this.renderer.addClass(this.el.nativeElement, 'left-right');
        break;
      case 'right-left':
        this.renderer.addClass(this.el.nativeElement, 'right-left');
        break;
      case 'fade-in':
        this.renderer.addClass(this.el.nativeElement, 'fade-in');
        break;
      case 'top-bottom':
        this.renderer.addClass(this.el.nativeElement, 'top-bottom');
        break;
      case 'bottom-top':
        this.renderer.addClass(this.el.nativeElement, 'bottom-top');
        break;
      default:
        this.renderer.addClass(this.el.nativeElement, 'fade-in');
    }
  }
}
