import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Gallery } from './gallery/gallery';
import { Contactus } from './contactus/contactus';
import { Veg } from './veg/veg';
import { Nonveg } from './nonveg/nonveg';
import { Dessert } from './dessert/dessert';
import { Databinding } from './databinding/databinding';
import { Directivedemo } from './directivedemo/directivedemo';
import { Formsdemo } from './formsdemo/formsdemo';
import { TemplateDriven } from './template-driven/template-driven';
import { ReactiveDriven } from './reactive-driven/reactive-driven';
import { Pipedemo } from './pipedemo/pipedemo';
import { CubePipe } from './cube-pipe';
import { SqrPipe } from './sqr-pipe';
import { ApiIntegration } from './api-integration/api-integration';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployee } from './add-employee/add-employee';
import { UpdateEmployee } from './update-employee/update-employee';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    Signup,
    Gallery,
    Contactus,
    Veg,
    Nonveg,
    Dessert,
    Databinding,
    Directivedemo,
    Formsdemo,
    TemplateDriven,
    ReactiveDriven,
    Pipedemo,
    CubePipe,
    SqrPipe,
    ApiIntegration,
    AddEmployee,
    UpdateEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
