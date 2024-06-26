import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiURL = 'https://localhost:7231/api/movies'

  constructor(private http: HttpClient) { }

  getHomeMovies(): Observable<any> {
    return this.http.get(`${this.apiURL}/home`).pipe(catchError(this.handleError));
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.apiURL}/trending`).pipe(catchError(this.handleError));
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiURL}/popular`).pipe(catchError(this.handleError));
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search?title=${query}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      return throwError('Faltan datos');
    }  else if (error.status === 401) {
      return throwError('No autorizado');
    }  else if (error.status === 403) {
      return throwError('Acceso denegado.');
    } else if (error.status === 500) {
      return throwError('Error en el servidor.');
    } else {
      return throwError('Error desconocido.');
    }
  }

}
