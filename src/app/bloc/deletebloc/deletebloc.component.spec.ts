import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteblocComponent } from './deletebloc.component';

describe('DeleteblocComponent', () => {
  let component: DeleteblocComponent;
  let fixture: ComponentFixture<DeleteblocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteblocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteblocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
