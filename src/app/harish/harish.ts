import { Component } from '@angular/core';
import { Chatserv } from '../chatserv';

@Component({
  selector: 'app-harish',
  standalone: false,
  templateUrl: './harish.html',
  styleUrl: './harish.css',
})
export class Harish {
  mymsg:any=[];
  constructor(private cs:Chatserv){}
  sendmessage(hmsg:any){
    this.mymsg=this.cs.commonchat(hmsg);
    // console.log(hmsg)
  }
}
