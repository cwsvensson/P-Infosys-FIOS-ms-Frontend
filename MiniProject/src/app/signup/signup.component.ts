import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  inputId : String;

  public name:String;

  constructor(private hs:HttpService, private cs:CustomerServiceService) { }

  ngOnInit(): void {
    
  }

 public Data: any = {id: Number, name: String, cableSubscribed: String, internetSubscribed: String, phoneSubscribed: String};

  onSubmit(){
    //document.getElementById("dataTable1").style.display = "none";
    this.submitted = true;
    this.hs.getSub(Number(this.inputId)).subscribe(data => 
      {
        console.log(data);
        document.getElementById("xslt-display").innerHTML = data.body;
        /*this.Data.id = data.id;
        this.Data.name = data.name;
        if(data.cableSubscribed) {this.Data.cableSubscribed = "Active"}
        else{this.Data.cableSubscribed = "Inactive"}
        if(data.internetSubscribed) {this.Data.internetSubscribed = "Active"}
        else{this.Data.internetSubscribed = "Inactive"}
        if(data.phoneSubscribed) {this.Data.phoneSubscribed = "Active"}
        else{this.Data.phoneSubscribed = "Inactive"}
        //document.getElementById("info").innerHTML = data.id + " " + data.name + " " + data.cableSubscribed + " " + data.internetSubscribed + " " + data.phoneSubscribed;
        document.getElementById("dataTable1").style.display = "flex";
        console.log(data);*/
      });
  }
}
