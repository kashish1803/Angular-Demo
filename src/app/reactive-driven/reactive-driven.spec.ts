import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDriven } from './reactive-driven';

describe('ReactiveDriven', () => {
  let component: ReactiveDriven;
  let fixture: ComponentFixture<ReactiveDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDriven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
