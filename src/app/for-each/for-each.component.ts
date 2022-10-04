import { Component, OnInit } from '@angular/core';
import { Names } from '../Names';
import { Image } from '../Image';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
  heroes = ['Akshay' , 'Amitabh' , 'Rajinikanth' , 'Dhanush'];
  constructor() { }
  data = [
    new Names(123 , "ABC"),
    new Names(456 , "DEF")
  ];

  ngOnInit(): void {
  }
}
