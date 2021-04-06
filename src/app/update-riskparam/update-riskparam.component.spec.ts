import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiskparamComponent } from './update-riskparam.component';

describe('UpdateRiskparamComponent', () => {
  let component: UpdateRiskparamComponent;
  let fixture: ComponentFixture<UpdateRiskparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiskparamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiskparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
