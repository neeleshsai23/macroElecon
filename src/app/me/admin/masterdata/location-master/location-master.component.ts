import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
// import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../../../shared/services/alert.service';
import { AddLocationComponent } from './add-location/add-location.component';

@Component({
  selector: 'app-location-master',
  templateUrl: './location-master.component.html',
  styleUrls: ['./location-master.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class LocationMasterComponent implements OnInit {

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
    {fat:"Small(Residential)",status:true},
    {fat:"Medium(School/College Campus)",status:true},
    {fat:"Large(Commercial High Rise)",status:true},
    {fat:"Enterprise(Tech Park)",status:true},
    // {fat:"USA",status:true},
    // {fat:"Switzerland",status:true},
    // {fat:"Ireland",status:true},
    // {fat:"UK",status:true}
  ]

  public openUserDialog(id) {
      let dialogRef = this.dialog.open(AddLocationComponent, {
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
