import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExerciceComponent } from './components/body/exercice/exercice.component';
import { OurpipePipe } from './pipe/ourpipe.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/body/login/login.component';
import { ForgetPasswordComponent } from './components/body/forget-password/forget-password.component';
import { NotFoundComponent } from './components/body/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExerciceComponent,
    OurpipePipe,
    LoginComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
