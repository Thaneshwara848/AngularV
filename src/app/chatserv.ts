import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Chatserv {
  chatmsg:any=[];
  commonchat(msg:any){
    console.log(msg);
    this.chatmsg.push(msg);
    return this.chatmsg;
  }
}
