import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public username: String;
  public password: String;
  
  
  constructor(private adminService: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.adminService.login({"username": this.username, "password": this.password}).subscribe(response => {
      this.adminService.setCurrentAdmin(response);
      if (response != null)
        this.router.navigate(['/fioslookuppage']);
    });
  }

}
