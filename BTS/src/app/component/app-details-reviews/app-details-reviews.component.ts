import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-details-reviews',
  templateUrl: './app-details-reviews.component.html',
  styleUrls: ['./app-details-reviews.component.css']
})
export class AppDetailsReviewsComponent implements OnInit {

  MovieRates: any[] =[
    {
      rate: 7.5,
      review: 'This p tag is going to have a new description. Some times it can be very long',
      author: 'Laura Gallego',
      usefulcount: 100,
      totalcount:200,
    },

    {
      rate: 9.5,
      review: 'This p tag is going to have a new description. Some times it can be very long',
      author: 'Brandom Sanderson',
      usefulcount: 100,
      totalcount:200,
    },

    {
      rate: 1.5,
      review: 'This p tag is going to have a new description. Some times it can be very long',
      author: 'ñeñeñeñe',
      usefulcount: 100,
      totalcount:200,
    }

    
  ]

  constructor(){

  }
  ngOnInit(): void {
   
  }

}
