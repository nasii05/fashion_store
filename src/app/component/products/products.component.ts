import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  cards = [
    {
      src:"../../../assets/images/product_1.jpg",
      price:"$199"
    },
    {
      src:"../../../assets/images/product_2.jpg",
      price:"$50"
    },
    {
      src:"../../../assets/images/product_3.jpg",
      price:"$99"
    },
    {
      src:"../../../assets/images/product_4.jpg",
      price:"$79"
    },
    {
      src:"../../../assets/images/product_5.jpg",
      price:"$56"
    },
    {
      src:"../../../assets/images/product_6.jpg",
      price:"$68"
    },
    {
      src:"../../../assets/images/product_7.jpg",
      price:"$89"
    },
    {
      src:"../../../assets/images/product_8.jpg",
      price:"$300"
    },
    {
      src:"../../../assets/images/product_9.jpg",
      price:"$465"
    },
    {
      src:"../../../assets/images/product_7.jpg",
      price:"$799"
    }
  ]

}
