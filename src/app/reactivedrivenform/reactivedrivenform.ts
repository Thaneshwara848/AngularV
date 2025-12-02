import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-reactivedrivenform',
  standalone: false,
  templateUrl: './reactivedrivenform.html',
  styleUrl: './reactivedrivenform.css',
})
export class Reactivedrivenform  implements OnInit{
  student:any;
  
  myinfo(studentdata:any){
      console.log(studentdata)
  }
  ngOnInit(): void {
    this.student=new FormGroup({
    firstname:new FormControl("",Validators.compose([
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
    ])),

    lastname:new FormControl("",Validators.compose([
       Validators.required,
       Validators.maxLength(10),
      Validators.minLength(3)
    ])),

    age:new FormControl("",Validators.compose([
       Validators.required,
       Validators.max(60),
       Validators.min(18)
    ])),
    
  })
  
  }
}
