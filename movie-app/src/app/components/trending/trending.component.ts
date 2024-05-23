import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss'
})
export class TrendingComponent implements OnInit{
  movies: any[] = [];
  errorMessage: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe(
      data => this.movies = data,
      error => this.errorMessage = error
    );  
  }
}
