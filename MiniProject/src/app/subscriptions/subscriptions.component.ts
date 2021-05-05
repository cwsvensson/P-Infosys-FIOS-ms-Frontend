import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../services/customer-service.service';
import { FiosServiceService } from '../services/fios-service.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public subscriptions : any;
  public cableFee : number;
  public internetFee : number;
  public phoneFee : number;

  constructor(private accountService : CustomerServiceService, private service : FiosServiceService, private router: Router) 
  { 
    service.getSubscriptions(accountService.getCurrentUser().username).subscribe((response) => {
      this.subscriptions = response;
      this.calculateFee();
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

  unsubscribeCable() : void{
    var subscription = {"id" : `${this.subscriptions[0].id}`, "name" : this.subscriptions[0].plan };
    //console.log(subscription);
    //console.log(this.service.deleteCableSubscription(subscription));
    this.service.deleteCableSubscription(subscription).subscribe(response => {
      this.subscriptions[0] = null;
      this.calculateFee();
    })
  }

  unsubscribeInternet() : void{
    this.service.deleteInternetSubscription({ "id" : this.subscriptions[1].id, "name" : this.subscriptions[1].plan }).subscribe((response) => {
      this.subscriptions[1] = null;
      this.calculateFee();
    })
  }

  unsubscribePhone() : void{
    this.service.deletePhoneSubscription({ "id" : this.subscriptions[2].id, "name" : this.subscriptions[2].plan }).subscribe((response) => {
      this.subscriptions[2] = null;
      this.calculateFee();
    })
  }

  navigateToAddSub() : void{
    console.log("navigateToAddSub");
    this.router.navigate(['/add-subscription']);
  }

  calculateFee() : void{
    if (this.subscriptions && this.subscriptions[0] != null && this.subscriptions[0].id !=-1)
    {
      this.cableFee = 25.55;
      if (this.subscriptions[0].plan === "basic")
        this.cableFee += 12.25;
      else if (this.subscriptions[0].plan === "premium")
        this.cableFee += 24.99;
      else if (this.subscriptions[0].plan === "unlimited")
        this.cableFee += 40.49;
    }
    else
      this.cableFee = 0;

      if (this.subscriptions && this.subscriptions[1] != null && this.subscriptions[1].id !=-1)
      {
        this.internetFee = 35.55;
        if (this.subscriptions[1].plan === "basic")
          this.internetFee += 6.25;
        else if (this.subscriptions[1].plan === "premium")
          this.internetFee += 35.99;
        else if (this.subscriptions[1].plan === "unlimited")
          this.internetFee += 45.27;
      }
      else
        this.internetFee = 0;

        if (this.subscriptions && this.subscriptions[2] != null && this.subscriptions[2].id !=-1)
        {
          this.phoneFee = 15.55;
          if (this.subscriptions[2].plan === "basic")
            this.phoneFee += 17.25;
          else if (this.subscriptions[2].plan === "premium")
            this.phoneFee += 29.99;
          else if (this.subscriptions[2].plan === "unlimited")
            this.phoneFee += 60.17;
        }
        else
          this.phoneFee = 0;
      
  }
}
