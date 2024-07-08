import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumeric]',
  standalone: true
})
export class NumericDirective {

  @Output() invalidCharacter = new EventEmitter<void>();
  @Input('appNumeric') fieldName: string = '';
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    // const input = event.target as HTMLInputElement;
    // let sanitized = input.value.replace(/[^0-9]/g, '');
    // if (sanitized !== input.value) {
    //   this.ngControl.control?.setValue(sanitized);
    // }
    const input = event.target as HTMLInputElement;
    const originalValue = input.value;
    const sanitized = originalValue.replace(/[^0-9]/g, '');

    if (sanitized !== originalValue) {
      this.invalidCharacter.emit();
      this.ngControl.control?.setValue(sanitized);
    }
  }

}
