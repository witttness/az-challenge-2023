import { Component } from '@angular/core';
import { MenuRow, MenuService } from '../data';
import { EateriaCmsService } from '../services/eateria-cms.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-menu-card-display',
  templateUrl: './menu-card-display.component.html',
  styleUrls: ['./menu-card-display.component.scss']
})
export class MenuCardDisplayComponent {
  menu: any[] = [];
  // menu: MenuRow[] = [];

  constructor(private menuSvc: MenuService, private cms: EateriaCmsService) {
    // menuSvc.menuGetFullMenuGet().pipe(first()).subscribe(data => {
    //   this.menu = data;
    // });
    cms.getRawData().pipe(first()).subscribe((data: any) => {
      this.menu = data.docs;
    });
  }

}
