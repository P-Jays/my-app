import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  hello = "hello Baby";
  username = '';
  fruit:any=[];

  constructor() {
    // setTimeout(()=>{
    //   this.hello = "hey baby";
    // },2000);
   }

  ngOnInit(): void {
   
  }

  firstButton(){
   // this.hello ="touch my body";
   this.username= '';
  }

  arrayClick(){
    this.fruit.push(this.fruit.length)
  }
}
