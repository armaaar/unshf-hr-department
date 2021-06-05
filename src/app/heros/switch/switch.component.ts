import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  uid:string = UUID.UUID();

  constructor() { }

  onChange(ev: Event) {
    this.checkedChange.emit((ev.target as HTMLInputElement).checked);
  }

}
