import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 

  isActive = false;

  /* ARRAYS */
  FanFavoriteMovies: any [] = [];
  TopMovies: any[] = [];

  /* array vacio para probar el firebase */
  data: any [] = [];


   /*----INJECT HttpClien----*/
   /* Esto lo hacemos para sacar la información de un Json */
   constructor(private httpClient: HttpClient, private apiServie: ApiService,/*  private _UsuarioServie: UsuarioService */){
  }


  ngOnInit():void { /* Se ejecuta una vez que se inicializa el componente */
    /* traer la info de los json */
    this.getFanFavoriteMovies();
    this.getTopMovies();
    this.getData();
/*     this.ListarUsuarios(); */
  }

  getFanFavoriteMovies(){
    /* the same array any[] e indicaremos la direcciñon de los datos*/
    this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json').subscribe((data:any[]) => {
      console.log("FanFavorite = ", data);
      /* dowland to the array */
      this.FanFavoriteMovies = data;
    })
  }

  getTopMovies(){
     /* the same array any[] e indicaremos la direcciñon de los datos*/
     this.httpClient.get<any[]>('assets/data/topMovies.json').subscribe((data:any[]) => {
      console.log("topMovies = ", data);
      /* dowland to the array */
      this.TopMovies = data;
    })
  }

  getData(){
    this.apiServie.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
      })
  }


/*   ListarUsuarios()
  {
    this._UsuarioServie.ListarUsuarios().subscribe(data =>{
      console.log(data);
    })
  } */


}
