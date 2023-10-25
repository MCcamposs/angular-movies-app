import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  movieId = '';

  stars:any[] = [];

  genres:any[] = [];

  directors:any[] = [];

  /* Para conseguir el ID, tiene que ser igual a lo que tenemos en module */
  constructor (private _activeRoute: ActivatedRoute,
    private httpClient: HttpClient) {

    this._activeRoute.params.subscribe((p) => {
      this.movieId = p["id"]; /* Lo que pongas aqui debe coincidir con lo puesto en el path */
      console.log('movie ID ====== '+this.movieId)
    })
  }

  ngOnInit(): void {
      /* traer la info de los json */
      this.getStars();
  }


  getStars(){
    /* the same array any[] e indicaremos la direcciñon de los datos*/
    this.httpClient.get<any[]>('assets/data/movieSummary.json').subscribe((data:any[]) => {
      /* dowland to the array */
      this.stars = data;
    })
  }

  
  
}
