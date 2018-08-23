import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[autofoco]'
})
export class AutofocoDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
  }
}
