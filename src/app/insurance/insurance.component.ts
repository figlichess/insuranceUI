import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {RiskParam} from '../dto/riskparam';
import {RiskparamService} from '../service/riskparam.service';
import {Router} from '@angular/router';
import {InsuranceService} from '../service/insurance.service';
import {RiskparamListComponent} from '../riskparam-list/riskparam-list.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {VehicleService} from '../service/vehicle.service';
import {VehicleListComponent} from '../vehicle-list/vehicle-list.component';
import {NotificationDialogComponent} from '../notification-dialog/notification-dialog.component';
import {Vehicle} from '../dto/vehicle';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit, AfterViewInit {

  riskParam: RiskParam = new RiskParam();
  submitted = false;
  @ViewChild(RiskparamListComponent)risksComponent: RiskparamListComponent;
  @ViewChild(VehicleListComponent)vehiclesComponent: VehicleListComponent;
  constructor(private riskparamService: RiskparamService, private insuranceService: InsuranceService,
              private vehicleService: VehicleService,
              private matDialog: MatDialog, private router: Router, private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
  ngOnInit(): void {
    this.risksComponent = new RiskparamListComponent(this.riskparamService, this.matDialog, this.router);
    this.vehiclesComponent = new VehicleListComponent(this.vehicleService, this.router);
  }

  calculateCasco(): void {
    const riskparams = this.risksComponent.chosenRisks;
    if (riskparams != null && riskparams.size > 0) {
      this.insuranceService.calculateInsurance(Array.from(riskparams.values()) )
        .subscribe(data => {
          console.log(data);
          this.reloadData();
        }, error => {console.log(error), this.openDialog('Error occurs while casco calculation ' + error);
    });
    } else {
      this.openDialog('At least one of the riskparameters must be chosen for calculation');
    }
  }
  openDialog(textmessage: string): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = textmessage;
    this.matDialog.open(NotificationDialogComponent, dialogConfig);
  }
  onSubmit(): void {
    this.submitted = true;
    this.calculateCasco();
  }
  vehicleDeleteEventHandler($event: any): void {
    this.reloadData();
  }
  reloadData(): void {
    this.risksComponent.ngOnInit();
    this.vehiclesComponent.reloadData();
  }

}
