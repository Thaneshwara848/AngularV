import { Component } from '@angular/core';
import { Chatserv } from '../chatserv';

@Component({
  selector: 'app-ibramhim',
  standalone: false,
  templateUrl: './ibramhim.html',
  styleUrl: './ibramhim.css',
})
export class Ibramhim {
constructor(private cs:Chatserv){}
    mymsg:any=[];
  sendmessage(vmsg:any){
    this.mymsg=this.cs.commonchat(vmsg);
  }
}
