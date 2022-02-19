import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  arr: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.arr.push();
  }

}
