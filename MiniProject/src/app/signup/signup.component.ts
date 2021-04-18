import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  inputId : String;

  constructor(private hs:HttpService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('in onSubmit');
    this.submitted = true;
    this.hs.getSub(Number(this.inputId)).subscribe(data => 
      {
        console.log(data);
      });
  }
}
