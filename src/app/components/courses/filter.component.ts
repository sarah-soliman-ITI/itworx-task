import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  @Output() filter = new EventEmitter();

   options = [
    {name:'Development', value:'Development', checked:false},
    {name:'IT & Software', value:'IT & Software', checked:false},
    {name:'Other', value:'Other', checked:false},
    {name:'Finance & Accounting', value:'Finance & Accounting', checked:false}
  ]


  
  durationOptions = [
    {name:'LessThanTwo', value:'LessThanTwo', checked:false},
    {name:'IT & Software', value:'IT & Software', checked:false},
    {name:'Other', value:'Other', checked:false},
    {name:'Finance & Accounting', value:'Finance & Accounting', checked:false}
  ]
  public ngOnInit() {
   // this.onFilter();
  }

   onFilter() {
    this.filter.emit(
      this.options
        .filter(opt => opt.checked)
        .map(opt => opt.name));
  }
}
