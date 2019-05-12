import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent extends BaseControlValueAccessor<string>
  implements OnInit {
  @Input()
  type = 'text';

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  validationErrors?: { [key: string]: string } | string;

  @Input()
  pattern: string;

  @Input()
  maxLength: number;

  @Input()
  submitted?: boolean;

  constructor(@Optional() @Self() public controlDir: NgControl) {
    super(controlDir);
  }

  ngOnInit(): void {
    if (this.pattern) {
      const ctrl = this.controlDir.control;
      const validators = ctrl.validator
        ? [ctrl.validator, Validators.pattern(this.pattern)]
        : Validators.pattern(this.pattern);
      ctrl.setValidators(validators);
      ctrl.updateValueAndValidity();
    }
  }

  getId() {
    return this.controlDir.name.toLowerCase() + '-id';
  }

  isInvalid(): boolean {
    return (
      ((this.submitted === true || this.submitted === undefined) &&
        this.controlDir &&
        this.controlDir.errors &&
        (this.controlDir.dirty || this.controlDir.touched)) ||
      false
    );
  }

  errorMessages(): string[] {
    if (!this.isInvalid()) {
      return [];
    }

    return typeof this.validationErrors === 'string'
      ? [this.validationErrors]
      : Object.keys(this.controlDir.errors)
          .filter(e => this.validationErrors && this.validationErrors[e])
          .map(e => this.validationErrors[e]);
  }

  setText(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
