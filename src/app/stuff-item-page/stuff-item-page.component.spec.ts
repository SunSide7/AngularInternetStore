import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffItemPageComponent } from './stuff-item-page.component';

describe('StuffItemPageComponent', () => {
  let component: StuffItemPageComponent;
  let fixture: ComponentFixture<StuffItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
