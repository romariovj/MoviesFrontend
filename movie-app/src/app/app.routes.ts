import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PopularComponent } from './components/popular/popular.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'search', component: SearchComponent},
    {path:'trending', component: TrendingComponent},
    {path:'popular', component: PopularComponent},
    {path:'', redirectTo:'/home', pathMatch: 'full'}
];
