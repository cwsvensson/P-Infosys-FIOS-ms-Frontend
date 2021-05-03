import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : String;
  public password : String;

  constructor(private service : CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login_clicked(){
    this.service.login({"username" : this.username, "password" : this.password}).subscribe(response => {
      console.log(response);
      this.service.setCurrentUser(response);
      this.router.navigate(['/mysubscriptions']);
    });
    
  }
}
