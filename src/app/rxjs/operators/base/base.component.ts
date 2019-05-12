import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, share, takeUntil } from 'rxjs/operators';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() description: string;

  color$: Observable<string>;
  icon$: Observable<string>;

  colorIn: string = this.dataService.colorStart;
  iconIn: string = this.dataService.iconStart;

  colorOut: string = this.dataService.colorStart;
  iconOut: string = this.dataService.iconStart;

  private ngUnsubscribe: Subject<any> = new Subject();

  @ViewChild('colorButton') colorButton: ElementRef;
  @ViewChild('iconButton') iconButton: ElementRef;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.color$ = fromEvent(this.colorButton.nativeElement, 'click').pipe(
      takeUntil(this.ngUnsubscribe),
      map(e => this.dataService.randomColor(this.colorIn)),
      share()
    );
    this.color$.subscribe({ next: color => (this.colorIn = color) });

    this.icon$ = fromEvent(this.iconButton.nativeElement, 'click').pipe(
      takeUntil(this.ngUnsubscribe),
      map(e => this.dataService.randomIcon(this.iconIn)),
      share()
    );
    this.icon$.subscribe({ next: icon => (this.iconIn = icon) });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public complete() {
    this.ngUnsubscribe.next();
  }
}
