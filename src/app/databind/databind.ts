import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  standalone: false,
  templateUrl: './databind.html',
  styleUrl: './databind.css',
})
export class Databind {

  abcd = false;
  company=" BRIGHT Virtusa";
  abc(){
    console.log("Hi You clicked the buttion")
  }

  myname ="";
  xyz(uname:string){
     console.log("Hi Your "+ uname)
     this.myname=uname;
  }

total=0;
emi=0;
  cal(p:any,t:any,r:any){
   this.total=(p * t * r)/ 100;
   this.emi= this.total/t;
  }

  roi=0;
  loanType(event:any){
    console.log(event.target.value);
    if(event.target.value=='car'){ this.roi=8}
    else if(event.target.value=='home'){ this.roi=10}
    else if(event.target.value=='personal'){ this.roi=13}
  
  }
}
