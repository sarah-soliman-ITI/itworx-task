import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'filterDur',
  templateUrl: './filterDur.component.html'
})
export class FilterDurComponent implements OnInit {

  @Output() filter = new EventEmitter();



  durationOptions = [
    { name: 'LessThanTwo', value: 'LessThanTwo', checked: false },
    { name: 'moreThanTwo', value: 'moreThanTwo', checked: false },
    { name: 'fromtwototen', value: 'fromtwototen', checked: false }
  ]
  public ngOnInit() {
    // this.onFilter();
  }


  onFilterDuration() {
    this.filter.emit(
      this.durationOptions
        .filter(opt => opt.checked)
        .map(opt => opt.name));
  }

}
