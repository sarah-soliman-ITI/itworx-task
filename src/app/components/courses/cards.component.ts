import { Component, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent  {

  @Input() cards;

}
