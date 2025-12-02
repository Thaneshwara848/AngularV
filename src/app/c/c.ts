import { Component } from '@angular/core';
import { Commonserv } from '../commonserv';

@Component({
  selector: 'app-c',
  standalone: false,
  templateUrl: './c.html',
  styleUrl: './c.css',
})
export class C {
  constructor(private cs:Commonserv){}
  CComponent(){
    //console.log("C 100 lines of code for DB conntion");
    this.cs.commonLogic()
  }
}
