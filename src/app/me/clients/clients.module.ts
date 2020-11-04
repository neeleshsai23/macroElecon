import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectsDialogComponent } from './projects-dialog/projects-dialog.component';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';

export const routes = [
  { path: '', redirectTo:"gridview", pathMatch:'full' },
  { path: 'gridview', component: GridViewComponent, data: { breadcrumb: "Grid View" } },
  { path: 'mapview', component: MapViewComponent, data: { breadcrumb: "Map View" } },
];

@NgModule({
  declarations: [ClientsComponent, GridViewComponent, MapViewComponent, ProjectsDialogComponent, AddClientDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule
  ],
  providers: [AlertService],
  entryComponents:[AddClientDialogComponent,ProjectsDialogComponent,DeleteConfirmDialogComponent]
})
export class ClientsModule { }
