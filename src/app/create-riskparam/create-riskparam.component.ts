import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RiskParam} from '../dto/riskparam';
import {RiskparamService} from '../service/riskparam.service';

@Component({
  selector: 'app-create-riskparam',
  templateUrl: './create-riskparam.component.html',
  styleUrls: ['./create-riskparam.component.css']
})
export class CreateRiskparamComponent implements OnInit {

  riskparam: RiskParam = new RiskParam();
  submitted = false;

  constructor(private riskparamService: RiskparamService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newVehicle(): void {
    this.submitted = false;
    this.riskparam = new RiskParam();
  }

  save(): void {
    this.riskparamService.createRiskparam(this.riskparam)
      .subscribe(data =>  {
        console.log(data);
        this.riskparam = new RiskParam();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/insurance']);
  }

}
