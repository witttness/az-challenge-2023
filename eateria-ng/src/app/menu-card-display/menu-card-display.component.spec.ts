import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardDisplayComponent } from './menu-card-display.component';

describe('MenuCardDisplayComponent', () => {
  let component: MenuCardDisplayComponent;
  let fixture: ComponentFixture<MenuCardDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCardDisplayComponent]
    });
    fixture = TestBed.createComponent(MenuCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
