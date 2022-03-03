import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/body/forget-password/forget-password.component';
import { LoginComponent } from './components/body/login/login.component';
import { NotFoundComponent } from './components/body/not-found/not-found.component';

const routes: Routes = [

  {path: 'home' , component: LoginComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'admin', loadChildren:()=>
    import ('./components/body/admin/admin.module').then((m)=> m.AdminModule),
},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
