import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskparamListComponent } from './riskparam-list.component';

describe('RiskparamListComponent', () => {
  let component: RiskparamListComponent;
  let fixture: ComponentFixture<RiskparamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskparamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskparamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
