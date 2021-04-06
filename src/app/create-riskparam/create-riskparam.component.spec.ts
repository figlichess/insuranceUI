import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRiskparamComponent } from './create-riskparam.component';

describe('CreateRiskparamComponent', () => {
  let component: CreateRiskparamComponent;
  let fixture: ComponentFixture<CreateRiskparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRiskparamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRiskparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
