import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IJoke } from "./joke";
import { IJokes } from "./jokes";

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokeUrl = 'https://v2.jokeapi.dev/joke/Programming';
  private jokesUrl = 'https://v2.jokeapi.dev/joke/Programming?amount=10';
  
  constructor(private http: HttpClient) { };
  
  getJoke(): Observable<IJoke> {
    return this.http.get<IJoke>(this.jokeUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  };

  getJokes(): Observable<IJokes> {
    return this.http.get<IJokes>(this.jokesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  };

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
