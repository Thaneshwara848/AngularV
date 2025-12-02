import { Component } from '@angular/core';
import { Chatserv } from '../chatserv';

@Component({
  selector: 'app-vikas',
  standalone: false,
  templateUrl: './vikas.html',
  styleUrl: './vikas.css',
})
export class Vikas {
   constructor(private cs:Chatserv){}
    mymsg:any=[];
  sendmessage(vmsg:any){
    this.mymsg=this.cs.commonchat(vmsg);
  }
}
