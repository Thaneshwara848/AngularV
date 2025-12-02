import { Component } from '@angular/core';

@Component({
  selector: 'app-templetdrivenform',
  standalone: false,
  templateUrl: './templetdrivenform.html',
  styleUrl: './templetdrivenform.css',
})
export class Templetdrivenform {

  myInfo(userForm:any){
    console.log(userForm)
  }
}
