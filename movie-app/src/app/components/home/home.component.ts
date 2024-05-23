import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  movies: any[] = [];
  errorMessage: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getHomeMovies().subscribe(
      data => this.movies = data,
      error => this.errorMessage = error
    );
    
  }

}
