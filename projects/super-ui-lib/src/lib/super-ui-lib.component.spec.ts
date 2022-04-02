import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUiLibComponent } from './super-ui-lib.component';

describe('SuperUiLibComponent', () => {
  let component: SuperUiLibComponent;
  let fixture: ComponentFixture<SuperUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperUiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
