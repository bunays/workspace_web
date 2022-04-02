import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {SidebarComponent} from '../common/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import {NavigationComponent} from '../common/navigation/navigation.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavigationComponent,
    LayoutComponent,
    ListInvoiceComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class WorkspaceModule { }
