import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appOnlyText]',
  standalone: true,
})
export class OnlyTextDirective {
  
  // element: ElementRef<HTMLInputElement> = inject(ElementRef);

  // @HostListener('input') onInput() {
  //   console.log('----------->', this.element.nativeElement.value);
  // }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('----------->', inputElement.value);
  }
}
