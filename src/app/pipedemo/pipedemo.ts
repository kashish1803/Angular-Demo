import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  standalone: false,
  templateUrl: './pipedemo.html',
  styleUrl: './pipedemo.css'
})
export class Pipedemo {
  name = "kaSHisH is a s/W devLoPer";
  amount = 1234567890;
  d = new Date();
  obj = {"id":100, "Name":"Soham"};
}
