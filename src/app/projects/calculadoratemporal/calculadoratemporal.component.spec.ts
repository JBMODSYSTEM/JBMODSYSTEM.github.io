import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoratemporalComponent } from './calculadoratemporal.component';

describe('CalculadoratemporalComponent', () => {
  let component: CalculadoratemporalComponent;
  let fixture: ComponentFixture<CalculadoratemporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoratemporalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoratemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
