import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListblocsComponent } from './listblocs.component';

describe('ListblocsComponent', () => {
  let component: ListblocsComponent;
  let fixture: ComponentFixture<ListblocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListblocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListblocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
