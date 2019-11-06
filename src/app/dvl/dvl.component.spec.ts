import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvlComponent } from './dvl.component';

describe('DvlComponent', () => {
  let component: DvlComponent;
  let fixture: ComponentFixture<DvlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
