import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloandetailsComponent } from './adminloandetails.component';

describe('AdminloandetailsComponent', () => {
  let component: AdminloandetailsComponent;
  let fixture: ComponentFixture<AdminloandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloandetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
