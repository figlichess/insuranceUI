import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../dto/vehicle';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleService} from '../service/vehicle.service';
import {RiskParam} from '../dto/riskparam';
import {RiskparamService} from '../service/riskparam.service';

@Component({
  selector: 'app-update-riskparam',
  templateUrl: './update-riskparam.component.html',
  styleUrls: ['./update-riskparam.component.css']
})
export class UpdateRiskparamComponent implements OnInit {

  id: number;
  riskparam: RiskParam;

  constructor(private route: ActivatedRoute, private router: Router,
              private riskparamService: RiskparamService) { }

  ngOnInit(): void  {
    this.riskparam = new RiskParam();
    const riskId = 'id';
    this.id = this.route.snapshot.params[riskId];

    this.riskparamService.getRiskparam(this.id)
      .subscribe(data => {
        console.log(data);
        this.riskparam = data;
      }, error => console.log(error));
  }

  updateRiskParam(): void {
    this.riskparamService.updateRiskparam(this.id, this.riskparam)
      .subscribe(data => {
          console.log(data);
          this.riskparam = new RiskParam();
          this.gotoList();
        }, error => console.log(error));
  }

  onSubmit(): void  {
    this.updateRiskParam();
  }

  gotoList(): void  {
    this.router.navigate(['/insurance']);
  }

}
