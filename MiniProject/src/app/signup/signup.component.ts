import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('in onSubmit');
    this.submitted = true;
  }
}
