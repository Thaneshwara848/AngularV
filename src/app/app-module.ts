import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Contactus } from './contactus/contactus';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Veg } from './veg/veg';
import { Nonveg } from './nonveg/nonveg';
import { Desert } from './desert/desert';
import { Restorent } from './restorent/restorent';
import { Databind } from './databind/databind';
import { FormsModule } from '@angular/forms';
import { Directivesdemo } from './directivesdemo/directivesdemo';
import { Pipedemo } from './pipedemo/pipedemo';
import { SqrPipe } from './sqr-pipe';
import { CubePipe } from './cube-pipe';
import { Formsdemo } from './formsdemo/formsdemo';
import { Templetdrivenform } from './templetdrivenform/templetdrivenform';
import { Reactivedrivenform } from './reactivedrivenform/reactivedrivenform';

@NgModule({
  declarations: [
    App,
    Home,
    Contactus,
    Signup,
    Login,
    Dashboard,
    Veg,
    Nonveg,
    Desert,
    Restorent,
    Databind,
    Directivesdemo,
    Pipedemo,
    SqrPipe,
    CubePipe,
    Formsdemo,
    Templetdrivenform,
    Reactivedrivenform
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
