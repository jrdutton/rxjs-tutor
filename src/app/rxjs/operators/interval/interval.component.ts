import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil, share } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {
  @Output()
  interval$: Observable<number>;

  values = new Array<number>();

  public fg = this.fb.group({
    period: this.fb.control('1000')
  });

  public get period() {
    return this.fg.get('period');
  }

  private ngUnsubscribe$: Subject<any> = new Subject();
  private ngUnsubscribe2$: Subject<any> = new Subject();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.period.valueChanges.pipe(takeUntil(this.ngUnsubscribe$)).subscribe({
      next: () => {
        this.resetInterval();
      }
    });

    this.createInterval();
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
    this.ngUnsubscribe2$.next();
    this.ngUnsubscribe2$.complete();
  }

  private createInterval() {
    this.interval$ = interval(this.period.value).pipe(
      takeUntil(this.ngUnsubscribe2$),
      share()
    );
    this.interval$.subscribe({
      next: value => {
        if (this.values.length > 20) {
          this.values.shift();
        }
        this.values.push(value);
      }
    });
  }

  private resetInterval() {
    this.ngUnsubscribe2$.next();
    this.createInterval();
  }
}
