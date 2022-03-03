import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [ HomeComponent, AboutComponent,
    FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
