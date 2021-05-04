import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../services/customer-service.service';
import { FiosServiceService } from '../services/fios-service.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public subscriptions : any;

  constructor(private accountService : CustomerServiceService, private service : FiosServiceService) 
  { 
    service.getSubscriptions(accountService.getCurrentUser().username).subscribe((response) => {
      this.subscriptions = response;
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

  unsubscribeCable() : void{
    var subscription = {"id" : `${this.subscriptions[0].id}`, "name" : this.subscriptions[0].plan };
    console.log(subscription);
    console.log(this.service.deleteCableSubscription(subscription));
    this.service.deleteCableSubscription(subscription).subscribe(response => {
      console.log(response);
      //this.subscriptions[0] = null;
    })
  }

  unsubscribeInternet() : void{
    this.service.deleteInternetSubscription({ "id" : this.subscriptions[1].id, "name" : this.subscriptions[1].plan }).subscribe((response) => {
      this.subscriptions[1] = null;
    })
  }

  unsubscribePhone() : void{
    this.service.deletePhoneSubscription({ "id" : this.subscriptions[2].id, "name" : this.subscriptions[2].plan }).subscribe((response) => {
      this.subscriptions[2] = null;
    })
  }
}
