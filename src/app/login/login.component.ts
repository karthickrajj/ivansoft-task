import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'chat';
  username: string='';
  password: string='';
  loggedIn:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    debugger;
    if (this.username === 'test@123' && this.password === 'test') {
      console.log(this.username,this.password)
      this.loggedIn = true;
      this.router.navigate(['/dashboard']);
    } else {
      alert('Wrong credentials');
    }
    
  }
}
