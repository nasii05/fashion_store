import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {

    image = [
      {
        src:"../../../assets/images/cat_women.jpg"
      },
      {
        src:"../../../assets/images/cat_men.jpg"
      },
      {
        src:"../../../assets/images/cat_footwear.jpg"
      }
    ]
}
