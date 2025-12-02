import { Component } from '@angular/core';
import { Commonserv } from '../commonserv';

@Component({
  selector: 'app-b',
  standalone: false,
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class B {
  constructor(private cs:Commonserv){}
  BComponent(){
    //console.log("B 100 lines of code for DB conntion");
    this.cs.commonLogic();
  }
}
