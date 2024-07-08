import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAlpha]',
  standalone: true
})
export class AlphaDirective {

 @Output() invalidCharacter = new EventEmitter<void>();
  @Input('appAlpha') fieldName: string = '';

  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const originalValue = input.value;
    const sanitized = originalValue.replace(/[^a-zA-Z]/g, '');  // Allow only letters

    if (sanitized !== originalValue) {
      this.invalidCharacter.emit();
      this.ngControl.control?.setValue(sanitized);
    }
  }

}
