import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDateGreaterThanToday]'
})
export class DateGreaterThanTodayDirective {
  @Input('appDateGreaterThanToday') date!: Date

  constructor(private element: ElementRef) {}

  ngOnChanges() {

    if (new Date() > new Date(this.date)) {
      this.element.nativeElement.style.color = 'red'
    } else {
      this.element.nativeElement.style.color = ''
    }
  }

}
