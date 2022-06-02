import { Component, OnDestroy, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/jokes/jokes.service';
import { IJokes } from 'src/app/services/jokes/jokes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  constructor(private jokeService: JokeService) {
  }

  errorMessage: string = "There's an error!";
  sub! : Subscription;

  jokes?: IJokes;
  ngOnInit(): void {
    this.sub = this.jokeService.getJokes().subscribe({
      next: jokes => {
        this.jokes = jokes;
      },
      error: err => this.errorMessage = err
    });   
  };
  
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe;
    }
  }
}
