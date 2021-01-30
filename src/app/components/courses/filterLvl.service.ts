import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterLvlService {

// If any checkbox value is included in the card as card.profile.name then show it, if not then remove it.
  filterByCheckboxes(cards) {
    cards.filter();
    return cards;
  }

}