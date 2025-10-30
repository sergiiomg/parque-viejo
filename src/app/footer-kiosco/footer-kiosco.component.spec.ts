import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKioscoComponent } from './footer-kiosco.component';

describe('FooterKioscoComponent', () => {
  let component: FooterKioscoComponent;
  let fixture: ComponentFixture<FooterKioscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterKioscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterKioscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
