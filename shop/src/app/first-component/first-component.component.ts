import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/enums/category.enum'

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  img: string = 'assets/img/Shirts1.jpg';
  name: string = 'First component';
  description: string = 'Firstt Descriprion';
  price: number = 99.90;
  category: Category = Category.shirts;
  isAvailable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
