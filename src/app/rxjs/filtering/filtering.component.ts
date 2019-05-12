import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {
  interval$: Observable<number>;

  constructor() {}

  ngOnInit() {}
}
