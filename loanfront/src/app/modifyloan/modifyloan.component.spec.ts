import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyloanComponent } from './modifyloan.component';

describe('ModifyloanComponent', () => {
  let component: ModifyloanComponent;
  let fixture: ComponentFixture<ModifyloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
