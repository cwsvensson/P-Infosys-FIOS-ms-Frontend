import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private service : CustomerServiceService) { console.log(this.service.getCurrentUser()); }

  ngOnInit(): void {
  }

}
