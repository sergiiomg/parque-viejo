import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionKioscoComponent } from './ubicacion-kiosco.component';

describe('UbicacionKioscoComponent', () => {
  let component: UbicacionKioscoComponent;
  let fixture: ComponentFixture<UbicacionKioscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionKioscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionKioscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
