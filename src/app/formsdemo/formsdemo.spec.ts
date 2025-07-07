import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formsdemo } from './formsdemo';

describe('Formsdemo', () => {
  let component: Formsdemo;
  let fixture: ComponentFixture<Formsdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Formsdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formsdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
