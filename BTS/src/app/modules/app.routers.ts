/* Angular module file */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "../component/details/details.component";
import { HomeComponent } from "../component/home/home.component";
import { SearchComponent } from "../component/search/search.component";
import { AppDetailsActorsComponent } from "../component/app-details-actors/app-details-actors.component";
import { AppDetailsMoviesComponent } from "../component/app-details-movies/app-details-movies.component";
import { AppDetailsReviewsComponent } from "../component/app-details-reviews/app-details-reviews.component";
import { NotFoundComponent } from "../component/not-found/not-found.component";
import { FeedbackComponent } from "../component/feedback/feedback.component";

const routes: Routes = [ /* Creamos array de routes */
    {path:'', component: HomeComponent}, //cuando el path este vacio nos vamos al home
    {path:'home', component: HomeComponent},
    {path:'details/:id', component: DetailsComponent}, 
    {path:'details/actors/:id', component: AppDetailsActorsComponent},
    {path:'details/movies/:id', component: AppDetailsMoviesComponent},
    {path:'details/review/:id', component: AppDetailsReviewsComponent},
    {path:'search/:movieTitle', component: SearchComponent},
    {path:'feedback', component: FeedbackComponent},

    /* 404 ERROR NOT FOUND */
    {path: '**', component: NotFoundComponent} /* al usar los ateriscos le decimos a angular que wild card root */
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[RouterModule],
})

export class AppRoutesModule {}