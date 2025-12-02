import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Commonserv {
  commonLogic(){
    console.log("100 lines of code from Serves , common line");
  }
}
