import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotasComponent } from './compotas.component';

describe('CompotasComponent', () => {
  let component: CompotasComponent;
  let fixture: ComponentFixture<CompotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
