import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  standalone: true,
})
export class OnlyTextDirective {

  // element: ElementRef<HTMLInputElement> = inject(ElementRef);

  // @HostListener('input') onInput() {
  //   console.log('----------->', this.element.nativeElement.value);
  // }

  ngControl = inject(NgControl, {optional: true});

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // console.log('----------->', inputElement.value);
    const value = inputElement.value;
    const regex = /^[a-zA-Z\s]*$/;
    if(!regex.test(value)){
      const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
      inputElement.value = cleanValue;
      this.ngControl?.control?.setValue(cleanValue);
    }
  }
}
