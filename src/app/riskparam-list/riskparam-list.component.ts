import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {RiskParam} from '../dto/riskparam';
import {RiskparamService} from '../service/riskparam.service';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NotificationDialogComponent} from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-riskparam-list',
  templateUrl: './riskparam-list.component.html',
  styleUrls: ['./riskparam-list.component.css']
})
export class RiskparamListComponent implements OnInit {

  riskparams: Observable<RiskParam[]>;
  chosenRisks: Map<number, RiskParam>;

  constructor(private riskparamService: RiskparamService, private matDialog: MatDialog,
              private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
    this.chosenRisks = new Map<number, RiskParam>();
  }

  reloadData(): void {
    this.riskparams = this.riskparamService.getRiskparamList();
  }

  deleteRiskParam(riskparam: RiskParam): void {
    if (!riskparam.hasCasco){
      this.riskparamService.deleteRiskparam(riskparam.id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    } else {
      this.openDialog('Riskparam is already used in calculation and cannot be updated/deleted');
    }
  }
  updateRiskParam(riskparam: RiskParam): void{
    if (!riskparam.hasCasco){
      this.router.navigate(['riskparams/update', riskparam.id]);
    } else {
      this.openDialog('Riskparam is already used in calculation and cannot be updated/deleted');
    }
  }
  updateChecked(riskparam, event): void{
    if (event.target.checked) {
      this.chosenRisks.set(riskparam.id, riskparam);
    } else {
      this.chosenRisks.delete(riskparam.id);
    }
  }
  openDialog(textmessage: string): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = textmessage;
    this.matDialog.open(NotificationDialogComponent, dialogConfig);
  }
}
