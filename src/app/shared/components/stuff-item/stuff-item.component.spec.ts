import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffItemComponent } from './stuff-item.component';

describe('StuffItemComponent', () => {
  let component: StuffItemComponent;
  let fixture: ComponentFixture<StuffItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
