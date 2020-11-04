import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
// import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../../../shared/services/alert.service';
import { AddFatComponent } from './add-fat/add-fat.component';

@Component({
  selector: 'app-fat-master',
  templateUrl: './fat-master.component.html',
  styleUrls: ['./fat-master.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class FatMasterComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;

  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
      public dialog: MatDialog, private alertService: AlertService) {
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {

  }

  tableList = [
    {fat:"Ideal",status:true},
    {fat:"Good",status:true},
    {fat:"Warning",status:true},
    {fat:"Alert",status:true},
    // {fat:"Materials Data Sheets",status:true},
    // {fat:"FAT Procedure",status:true},
    // {fat:"Installation",status:true},
    // {fat:"Maintenance and User's Manuals",status:true}
  ]

  public openUserDialog(id) {
      let dialogRef = this.dialog.open(AddFatComponent, {
          data: id,
          height: 'auto',
          width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }


  deleteUser(){
      this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
      this.alertService.createAlert('Successfully saved.', 1);
  }


}
