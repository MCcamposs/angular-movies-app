import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailsComponent } from './component/details/details.component';
import { AppDetailsMoviesComponent } from './component/app-details-movies/app-details-movies.component';
import { AppDetailsReviewsComponent } from './component/app-details-reviews/app-details-reviews.component';
import { AppDetailsActorsComponent } from './component/app-details-actors/app-details-actors.component';
import { SearchComponent } from './component/search/search.component';
import { AppRoutesModule } from './modules/app.routers';
import { NotFoundComponent } from './component/not-found/not-found.component';
/* FIREBASE */
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from '../environments/environment';
/* ----import HttpClienteModule */
import { HttpClientModule } from '@angular/common/http';
import { HeaderDirective } from './directives/header.directive';
import { FeedbackComponent } from './component/feedback/feedback.component';
/*  */
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  /* DECLARANDO TODOS LOS COMPONENTES */
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    AppDetailsMoviesComponent,
    AppDetailsReviewsComponent,
    AppDetailsActorsComponent,
    SearchComponent,
    NotFoundComponent,
    HeaderDirective,
    FeedbackComponent,
    /* DIRECTIVE */
    
  ],
  /* DECLARANDO LOS MODULE */
  imports: [
    BrowserModule,
    AppRoutesModule, /* lo que hemos creado lo ponemos */
    FormsModule, 
    HttpClientModule,
    /* Inicializamos para poder usar firebase */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    ReactiveFormsModule,

    AuthModule.forRoot({
      domain: '',
      clientId:'',
      authorizationParams:{
        redirect_uri:window.location.origin
      }
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
