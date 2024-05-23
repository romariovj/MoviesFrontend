import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  movies: any[] = [];
  errorMessage: string = '';
  title: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {  }
  searchMovies(): void {
    this.movieService.searchMovies(this.title).subscribe(
      data => this.movies = data,
      error => this.errorMessage = error
    );
  }

}
