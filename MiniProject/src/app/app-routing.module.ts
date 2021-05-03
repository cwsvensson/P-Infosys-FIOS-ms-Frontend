import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mysubscriptions', component: SubscriptionsComponent },
  { path: 'add-subscription', component: AddSubscriptionComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
