import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoCompComponent } from './secondo-comp.component';

describe('SecondoCompComponent', () => {
  let component: SecondoCompComponent;
  let fixture: ComponentFixture<SecondoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondoCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
