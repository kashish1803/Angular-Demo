import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
  
  
})
export class TemplateDriven {
  myInfo(userdata:any){
    console.log(userdata)
  }
}
