import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosKioscoComponent } from './servicios-kiosco.component';

describe('ServiciosKioscoComponent', () => {
  let component: ServiciosKioscoComponent;
  let fixture: ComponentFixture<ServiciosKioscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosKioscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosKioscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
