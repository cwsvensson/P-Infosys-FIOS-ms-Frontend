import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public firstname : String;
  public lastname : String;
  public username : String;
  public password : String;

  public error : boolean;

  constructor(private service : CustomerServiceService) { }

  ngOnInit(): void {
  }

  register_clicked(){
    if (!this.firstname || !this.lastname || !this.username || !this.password)
      this.error = true;
    
    else 
    {
      this.service.register({
        "firstName" : this.firstname,
        "lastName" : this.lastname,
        "username" : this.username,
        "password" : this.password
      }).subscribe(response => {
        console.log(response);
      });
    }
  }
}
