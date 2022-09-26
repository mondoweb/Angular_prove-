import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo-comp',
  templateUrl: './secondo-comp.component.html',
  styleUrls: ['./secondo-comp.component.css']
})
export class SecondoCompComponent implements OnInit {

  constructor() { }


  nome : string = 'luca';
  oggi =  Date.now();
  data = Date();

  ngOnInit(): void {
  }

}
