import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'filterLvl',
  templateUrl: './filterLvl.component.html'
})
export class FilterLvlComponent implements OnInit {

  @Output() filter = new EventEmitter();



  lvlOptions = [
    { name: 'Beginner', value: 'Beginner', checked: false },
    { name: 'Intermediate', value: 'Intermediate', checked: false },
    { name: 'Expert', value: 'Expert', checked: false }
  ]
  public ngOnInit() {
    // this.onFilter();
  }


  onFilterLvl() {
    this.filter.emit(
      this.lvlOptions
        .filter(opt => opt.checked)
        .map(opt => opt.name));
  }

}
