import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmployees } from './page-employees';

describe('PageEmployees', () => {
  let component: PageEmployees;
  let fixture: ComponentFixture<PageEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
