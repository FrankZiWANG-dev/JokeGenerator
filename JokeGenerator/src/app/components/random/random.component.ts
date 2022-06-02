import { Component, OnDestroy, OnInit } from '@angular/core';
import { faFaceGrinSquint } from '@fortawesome/free-regular-svg-icons';
import { JokeService } from 'src/app/services/jokes/jokes.service';
import { IJoke } from 'src/app/services/jokes/joke';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [JokeService],
})
export class RandomComponent implements OnInit, OnDestroy {
  smiley = faFaceGrinSquint;

  constructor(private jokeService: JokeService) {
  }
  ngOnInit(): void {
  }

  errorMessage: string = "There's an error!";
  sub! : Subscription;

  joke?: IJoke;
  
  getJoke() {
    this.sub = this.jokeService.getJoke().subscribe({
      next: joke => {
        this.joke = joke;
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
