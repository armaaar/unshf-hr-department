import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface DoubleSwitchOption<T> {
  label: string;
  value: T;
}

@Component({
  selector: 'app-double-switch',
  templateUrl: './double-switch.component.html',
  styleUrls: ['./double-switch.component.scss']
})
export class DoubleSwitchComponent<T> implements OnInit {
  @Input() firstOption?:DoubleSwitchOption<T>;
  @Input() secondOption?:DoubleSwitchOption<T>;
  @Input() value?: T;
  @Output() valueChange = new EventEmitter<T>();

  constructor() { }

  ngOnInit(): void {
    if(this.firstOption === undefined) {
      throw new Error("SearchInputComponent: Attribute 'firstOption' is required");
    }
    if(this.secondOption === undefined) {
      throw new Error("SearchInputComponent: Attribute 'secondOption' is required");
    }
    if(this.value === undefined) {
      throw new Error("SearchInputComponent: Attribute 'value' is required");
    }
  }

  onChange(newVal: boolean) {
    this.valueChange.emit(newVal ? this.secondOption?.value : this.firstOption?.value);
  }

}
