import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  standalone: false,
  templateUrl: './pipedemo.html',
  styleUrl: './pipedemo.css',
})
export class Pipedemo {
  job="thANeSh iS a trInEr";
  amount =123456789;
  d = new Date();
  obj ={"id":100,"name":"Thanesh"}
}
