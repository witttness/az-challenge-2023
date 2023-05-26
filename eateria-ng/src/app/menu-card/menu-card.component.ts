import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuRow } from '../data';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Input()
  item!: MenuRow;

  @Output()
  onSelected = new EventEmitter<MenuRow>();

  hovered = false;

  select(e: any) {
    e.preventDefault();
    this.onSelected.emit(this.item);
  }
}
