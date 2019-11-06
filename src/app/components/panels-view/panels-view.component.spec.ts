import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsViewComponent } from './panels-view.component';

describe('PanelsViewComponent', () => {
  let component: PanelsViewComponent;
  let fixture: ComponentFixture<PanelsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
