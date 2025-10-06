import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKioscoComponent } from './header-kiosco.component';

describe('HeaderKioscoComponent', () => {
  let component: HeaderKioscoComponent;
  let fixture: ComponentFixture<HeaderKioscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKioscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKioscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
