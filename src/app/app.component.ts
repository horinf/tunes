import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isScrolled = false;

  private unsubscriber = new Subscription();

  ngOnInit(): void {
    // DO NOT subscribe on such events on the server side (SSR)! window doesn't exist there!
    const subscriptionScroll = fromEvent(window, 'scroll').pipe(debounceTime(100))
      .subscribe(() => {
        this.checkIfScrolled();
    });
    this.unsubscriber.add(subscriptionScroll);

    // DO NOT subscribe on such events on the server side (SSR)! window doesn't exist there!
    const subscriptionResize = fromEvent(window, 'resize').pipe(debounceTime(100))
      .subscribe(() => {
        this.checkIfScrolled();
    });
    this.unsubscriber.add(subscriptionResize);
  }

  ngOnDestroy(): void {
    if (this.unsubscriber) {
      this.unsubscriber.unsubscribe();
    }
  }

  private checkIfScrolled() {
    const scrollPos = window.scrollY;
    if (scrollPos > 120 && !this.isScrolled) {
        this.isScrolled = true;
        this.isScrolled$.next(this.isScrolled);
    } else if (scrollPos < 60 && this.isScrolled) {
        this.isScrolled = false;
        this.isScrolled$.next(this.isScrolled);
    }
  }
}
