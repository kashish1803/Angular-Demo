import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Contactus } from './contactus/contactus';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Veg } from './veg/veg';
import { Nonveg } from './nonveg/nonveg';
import { Dessert } from './dessert/dessert';
import { Databinding } from './databinding/databinding';
import { Directivedemo } from './directivedemo/directivedemo';
import { Formsdemo } from './formsdemo/formsdemo';
import { Pipedemo } from './pipedemo/pipedemo';
import { ApiIntegration } from './api-integration/api-integration';
import { AddEmployee } from './add-employee/add-employee';
import { UpdateEmployee } from './update-employee/update-employee';



const routes: Routes = [
  {
    path:'home', component:Home
  },
  {
    path:'gallery', component:Gallery
  },
  {
    path:'contactus', component:Contactus
  },
  {
    path:'login', component:Login
  },
  {
    path:'signup', component:Signup
  },
  {
    path:'veg', component:Veg
  },
  {
    path:'nonveg', component:Nonveg
  },
  {
    path:'dessert', component:Dessert
  },
  {
    path:'databinding', component:Databinding
  },
  {
    path:'dir', component:Directivedemo
  },
  {
    path:'form', component:Formsdemo
  },
  {
    path:'pipe', component:Pipedemo
  },
  {
    path:'api', component:ApiIntegration
  },
  { path: 'add-employee', component: AddEmployee },
  { path: 'update-employee/:id', component: UpdateEmployee },

  {
    path:'', component:Login
  },
  {
    path:'**', component:Home
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
