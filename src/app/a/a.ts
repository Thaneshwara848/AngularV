import { Component } from '@angular/core';
import { Commonserv } from '../commonserv';

@Component({
  selector: 'app-a',
  standalone: false,
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class A {
  constructor(private cs:Commonserv){}
  AComponent(){
      // console.log("A 100 lines of code for DB conntion");
      this.cs.commonLogic();
  }
}
