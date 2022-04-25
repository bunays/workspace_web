import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ErrorComponent } from '../error/error.component';
import {AuthGuard} from '../_helpers/auth.guard';
import { UserlistComponent } from '../admin/userlist/userlist.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { AddBookingComponent } from './add-booking/add-booking.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "userlist", pathMatch: "full" },
      { path: 'userlist', component: UserlistComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'servicelist', component: ServicelistComponent },
      { path: 'add-service', component: AddServiceComponent },
      { path: 'bookinglist', component: BookinglistComponent },
      { path: 'add-booking', component: AddBookingComponent },
     
    ]
  },
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
