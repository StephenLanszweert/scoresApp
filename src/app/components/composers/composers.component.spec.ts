import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposersComponent } from './composers.component';

describe('ComposersComponent', () => {
  let component: ComposersComponent;
  let fixture: ComponentFixture<ComposersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
