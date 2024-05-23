import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    // FormBuilder,
    // FormGroup,
    // Validators,
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  movies: any[] = [];
  errorMessage: string = '';
  //title: string = '';
  searchForm: FormGroup = new FormGroup({
    title: new FormControl('')
  });
  submitted = false;

  constructor(private movieService: MovieService, 
    private formBuilder: FormBuilder) {
      this.searchForm = this.formBuilder.group({
        title: ['', Validators.required]
      });
  
     }

  ngOnInit(): void {  }

  onSubmit() {
    this.submitted = true;
    if (this.searchForm.valid) {
      this.searchMovies(this.searchForm.get('title')?.value);
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.searchForm.controls;
  }


  searchMovies(query: string): void {
    this.movieService.searchMovies(query).subscribe(
      data => this.movies = data,
      error => this.errorMessage = error
    );
  }

}
