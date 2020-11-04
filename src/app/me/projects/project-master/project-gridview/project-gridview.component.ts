import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog, PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AddprojectDialogComponent } from '../addproject-dialog/addproject-dialog.component';
import { ProjectGridcolumnsComponent } from '../project-gridcolumns/project-gridcolumns.component';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { LogisticsdialogComponent } from '../logisticsdialog/logisticsdialog.component';

@Component({
  selector: 'app-project-gridview',
  templateUrl: './project-gridview.component.html',
  styleUrls: ['./project-gridview.component.scss']
})
export class ProjectGridviewComponent implements OnInit {
  
  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{'status_id':'1','status_name':'Active'},
  {'status_id':'2','status_name':'Inactive'}]
  
  public status_filter = ""; 
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  startendDate = new FormControl();
  startdueDate = new FormControl();
  activityDate = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [
    {projectNumber: "P12007",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "Amazon",city:"Ontario",country:"Canada",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
    {projectNumber: "P12009",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "Flipkart",city:"Ontario",country:"Vietnam",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
    {projectNumber: "P12011",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "E-Square",city:"Ontario",country:"India",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Inactive"},
    {projectNumber: "P12012",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "StoneField",city:"Ontario",country:"Taiwan",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
    {projectNumber: "P12015",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "Bluedart",city:"Ontario",country:"Vietnam",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
    // {projectNumber: "P12007",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "AJAX",city:"Ontario",country:"Canada",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
    // {projectNumber: "P12007",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "AJAX",city:"Ontario",country:"Canada",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Inactive"},
    // {projectNumber: "P12007",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "AJAX",city:"Ontario",country:"Canada",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
    // {projectNumber: "P12007",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "AJAX",city:"Ontario",country:"Canada",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
    // {projectNumber: "P12007",project_address: "2314535 Ontario Limited (The King Street Condos)",clientName: "AJAX",city:"Ontario",country:"Canada",zipcode:"2345",setupDate:"01-07-2020",remarks:"None",status: "Active"},
];
  
  constructor(public dialog: MatDialog,public appSettings:AppSettings) {
    const single = [
      {
        name: 'Amazon',
        value: 40
      },
      {
        name: 'Flipkart',
        value: 49
      },
      {
        name: 'E-Square',
        value: 36
      },
      {
        name: 'Stonefield',
        value: 52
      },
      {
        name: 'Bluedart',
        value: 27
      }
    ];
    const multi = [
      {
        name: '#0027',
        value: 35
      },
      {
        name: '#0023',
        value: 20
      },
      {
        name: '#0037',
        value: 94
      },
      {
        name: '#0012',
        value: 51
      },
      {
        name: '#0015',
        value: 28
      },
      {
        name: '#0017',
        value: 67
      },
      {
        name: '#0019',
        value: 82
      },
    ];
    const triple = [
      {
        name: 'India',
        value: 147
      },
      {
        name: 'Vietnam',
        value: 224
      },
      {
        name: 'Taiwan',
        value: 211
      },
      // {
      //   name: 'Connecticut',
      //   value: 132
      // },
      // {
      //   name: 'Texas',
      //   value: 90
      // },
      // {
      //   name: 'Florida',
      //   value: 55
      // },
      // {
      //   name: 'Washington',
      //   value: 298
      // },
      // {
      //   name: 'Arizona',
      //   value: 150
      // },
    ];
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single,multi,triple}); 
  }

  public onSelect(event) {
    console.log(event);
  }
  
  ngOnInit() {
    
  }
  
  openProjectDialog(stat){
    let dialogRef = this.dialog.open(AddprojectDialogComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if(prospects == 'save') {
        
      }
    });
  }

  openLogisticsDialog(stat){
    let dialogRef = this.dialog.open(LogisticsdialogComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if(prospects == 'save') {
        
      }
    });
  }
  
  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  fliterSearch() {}
  clearFilters() {
    this.contactName.setValue([]);
    this.clientName.setValue([]);
    this.jobTitle.setValue([]);
    this.startendDate.setValue([]);
    this.startdueDate.setValue([]);
    this.activityDate.setValue([]);
    this.contactNumber.setValue([]);
    this.statu.setValue([]);
    this.status_filter = '';
  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
    ele.scrollLeft += 210;
    else
    ele.scrollLeft -= 210;
  }
  
  openGridColumnsDialog(stat) {
    let dialogRef = this.dialog.open(ProjectGridcolumnsComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {
        
      }
    });
  }
}
