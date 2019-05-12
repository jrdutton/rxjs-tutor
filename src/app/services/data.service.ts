import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  colorOptions = [
    'btn-primary',
    'btn-secondary',
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-dark'
  ];
  colorStart = 'btn-light';

  iconOptions = [
    'database',
    'desktop',
    'hdd',
    'keyboard',
    'laptop',
    'microchip',
    'power-off',
    'save'
  ];
  iconStart = 'pause';

  constructor() {}

  public randomColor(current: string): string {
    let next: string = '';
    do {
      const randomIndex = this.randomInt(0, this.colorOptions.length);
      next = this.colorOptions[randomIndex];
    } while (current === next);
    return next;
  }

  public randomIcon(current: string): string {
    let next: string = '';
    do {
      const randomIndex = this.randomInt(0, this.iconOptions.length);
      next = this.iconOptions[randomIndex];
    } while (current === next);
    return next;
  }

  private randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
