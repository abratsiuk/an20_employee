import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCards } from './employees-cards';

describe('EmployeesCards', () => {
  let component: EmployeesCards;
  let fixture: ComponentFixture<EmployeesCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
