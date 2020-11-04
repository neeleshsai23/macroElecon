import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterdataComponent } from './masterdata.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../shared/shared.module';
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { IndustryMasterComponent } from './industry-master/industry-master.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { FatMasterComponent } from './fat-master/fat-master.component';
import { AddFatComponent } from './fat-master/add-fat/add-fat.component';
import { AddIndustryComponent } from './industry-master/add-industry/add-industry.component';
import { AddLocationComponent } from './location-master/add-location/add-location.component';

export const routes = [
  { path: '', redirectTo: 'devicetype', pathMatch: 'full' },
  { path: 'devicetype', component: IndustryMasterComponent, data: { breadcrumb: 'Master Data' } },
  { path: 'projecttype', component: LocationMasterComponent, data: { breadcrumb: 'Master Data' } },
  { path: 'projectstage', component: FatMasterComponent, data: { breadcrumb: 'Master Data' } },
];

@NgModule({
  declarations: [MasterdataComponent, IndustryMasterComponent, LocationMasterComponent, FatMasterComponent,  AddFatComponent, AddIndustryComponent, AddLocationComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddFatComponent,AddIndustryComponent,AddLocationComponent]
})
export class MasterdataModule { }
