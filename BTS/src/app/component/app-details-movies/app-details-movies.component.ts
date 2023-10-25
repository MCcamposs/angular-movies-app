import { Component } from '@angular/core';

@Component({
  selector: 'app-app-details-movies',
  templateUrl: './app-details-movies.component.html',
  styleUrls: ['./app-details-movies.component.css']
})
export class AppDetailsMoviesComponent {

  similarMovies: any[] = [
    {
      imgURL: '../../../assets/images/jkM.jpg',
      MovieTitle: 'El imperio final',
      MovieRate: '9.5/10'
    },
    {
      imgURL: '../../../assets/images/jkM.jpg',
      MovieTitle: 'El pozo de la ascencion',
      MovieRate: '8/10'
    },
    {
      imgURL: '../../../assets/images/jkM.jpg',
      MovieTitle: 'El heroe de las eras',
      MovieRate: '10/10'
    }
  ]

  constructor(){

  }
}
