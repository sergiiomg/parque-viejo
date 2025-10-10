import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesKioscoComponent } from './novedades-kiosco.component';

describe('NovedadesKioscoComponent', () => {
  let component: NovedadesKioscoComponent;
  let fixture: ComponentFixture<NovedadesKioscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovedadesKioscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesKioscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
