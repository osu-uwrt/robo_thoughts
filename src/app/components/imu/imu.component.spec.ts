import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImuComponent } from './imu.component';

describe('ImuComponent', () => {
  let component: ImuComponent;
  let fixture: ComponentFixture<ImuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
