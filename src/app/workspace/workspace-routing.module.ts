import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ErrorComponent } from '../error/error.component';
import {AuthGuard} from '../_helpers/auth.guard';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "invoicelist", pathMatch: "full" },
      { path: 'invoicelist', component: ListInvoiceComponent },
      { path: 'add-invoice', component: InvoiceComponent }
    ]
  },
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
