import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../services/customer-service.service';
import { FiosServiceService } from '../services/fios-service.service';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css']
})
export class AddSubscriptionComponent implements OnInit {
  public service : String;
  public plan : String;

  constructor(private cs : CustomerServiceService, private fs : FiosServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  subscribe() : void{
    console.log(this.service);
    if (this.service == "cable")
    {
      console.log("In cable");
      console.log(this.cs.getCurrentUser());
      this.fs.postCableSubscription({"id" : this.cs.getCurrentUser().id, "name" : this.plan }).subscribe(result => {
        if (result != null)
        {
          this.router.navigate(['/mysubscriptions']);
        }
      });
    }
    else if (this.service == "internet")
    {
      console.log("In internet");
      this.fs.postInternetSubscription({"id" : this.cs.getCurrentUser().id, "name" : this.plan }).subscribe(result => {
        if (result != null)
        {
          this.router.navigate(['/mysubscriptions']);
        }
      });
    }
    else if (this.service == "phone")
    {
      console.log("In phone");
      this.fs.postPhoneSubscription({"id" : this.cs.getCurrentUser().id, "name" : this.plan }).subscribe(result => {
        if (result != null)
        {
          this.router.navigate(['/mysubscriptions']);
        }
      });
    }
  }
}
