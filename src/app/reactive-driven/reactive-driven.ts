import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven',
  standalone: false,
  templateUrl: './reactive-driven.html',
  styleUrl: './reactive-driven.css'
})
export class ReactiveDriven implements OnInit{

  student:any;

  ngOnInit() {
  
  this.student=new FormGroup({
    firstname:new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
         Validators.pattern('^[a-zA-Z]*$')
      ]
    )),

    lastname:new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]
    )),
     age:new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.min(18),
        Validators.max(60)
      ]
    ))
  })


  }

  myInfo(studentdata:any){
    console.log(studentdata)
  }

}
