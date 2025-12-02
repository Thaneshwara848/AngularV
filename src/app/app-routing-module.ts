import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { Contactus } from './contactus/contactus';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Veg } from './veg/veg';
import { Nonveg } from './nonveg/nonveg';
import { Desert } from './desert/desert';
import { Restorent } from './restorent/restorent';
import { Databind } from './databind/databind';
import { Directivesdemo } from './directivesdemo/directivesdemo';
import { Pipedemo } from './pipedemo/pipedemo';
import { Formsdemo } from './formsdemo/formsdemo';
import { ServiceDemo } from './service-demo/service-demo';
import { Chatapp } from './chatapp/chatapp';

const routes: Routes = [
  {path:'home',component:Home},
  {path:'dashboard',component:Dashboard},
  {path:"contactus",component:Contactus},
  {path:'signup',component:Signup},
  {path:'login',component:Login},
  {path:'veg',component:Veg},
  {path:'nonveg',component:Nonveg},
  {path:'desert',component:Desert},
  {path:'restorent',component:Restorent},
  {path:'databind',component:Databind} ,
  {path:'dir',component:Directivesdemo},
  {path:'pipedemo',component:Pipedemo},
  {path:'forms',component:Formsdemo},
  {path:'serv',component:ServiceDemo},
  {path:'chat',component:Chatapp},


  // this 2 must be alwasy last -- wild card routing ...!
  {path:'**',component:Login  },
  {path:'',component:Login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
