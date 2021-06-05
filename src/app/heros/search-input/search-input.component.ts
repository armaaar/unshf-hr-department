import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() value?: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if(this.value === undefined) {
      throw new Error("SearchInputComponent: Attribute 'value' is required");
    }
  }

  onInput(ev: Event) {
    this.valueChange.emit((ev.target as HTMLInputElement).value);
  }

}
