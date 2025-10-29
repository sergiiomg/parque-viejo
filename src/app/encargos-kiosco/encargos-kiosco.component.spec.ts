import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargosKioscoComponent } from './encargos-kiosco.component';

describe('EncargosKioscoComponent', () => {
  let component: EncargosKioscoComponent;
  let fixture: ComponentFixture<EncargosKioscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncargosKioscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncargosKioscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
