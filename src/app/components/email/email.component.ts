import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit
{
  //create object and bind each field with the input field
  data={
    to:"",
    subject:"",
    message:""

  }
  constructor(){

  }
  ngOnInit(): void {
      
  }
  doSubmitForm(){
    console.log("try to submit form");
    console.log("Data",this.data);

  }

}
