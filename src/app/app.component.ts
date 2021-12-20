import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, Subscription } from 'rxjs';
import { TuneInfoDialogComponent } from './components/tune-info-dialog/tune-info-dialog.component';
import { TuneModel } from './model/TuneModel';
import { EventBusService } from './services/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public isScrolled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isScrolled = false;

  @ViewChild(TuneInfoDialogComponent, {static: false})
  tuneInfoDialog!: TuneInfoDialogComponent;

  private unsubscriber = new Subscription();

  constructor(
    private eventBus: EventBusService,
    ) { }

  ngOnInit(): void {
    const subscriptionTuneInfo = this.eventBus.tuneInfo$.subscribe((tune: TuneModel) => {
      this.tuneInfoDialog.Show(tune);
    })
    this.unsubscriber.add(subscriptionTuneInfo);

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
