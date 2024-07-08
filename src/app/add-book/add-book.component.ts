import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NumericDirective } from '../numeric.directive';
import { AlphaDirective } from '../alpha.directive';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,NumericDirective,AlphaDirective],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  selectedOption: string = '';
  isbn: number | undefined;
  isbnname: string = '';
  author: string = '';
  publication: string = '';
  details: string = '';
  qty: number | undefined;
  price: string = '';
  showInvalidCharacterError: { [key: string]: boolean } = {};
  showInvalidalphaCharacterError: { [key: string]: boolean } = {};



  constructor() { }

  ngOnInit(): void {
  }
  onInvalidCharacter(val: string) {
    this.showInvalidCharacterError[val] = true;
    setTimeout(() => this.showInvalidCharacterError[val] = false, 2000); // Hide the error after 2 seconds
  }
  onInvalidalphaCharacter(val: string) {
    this.showInvalidalphaCharacterError[val] = true;
    setTimeout(() => this.showInvalidalphaCharacterError[val] = false, 2000);
  }
  onSubmit(addForm: NgForm) {
    console.log('val', addForm)
    addForm.resetForm();
    alert('Submited Successful')

  }
}
