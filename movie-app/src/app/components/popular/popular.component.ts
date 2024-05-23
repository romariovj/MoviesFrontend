import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent implements OnInit{
  movies: any[] = [];
  errorMessage: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(
      data => this.movies = data,
      error => this.errorMessage = error
    );  
  }
}
