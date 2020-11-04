import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./me/not-found/not-found.component";
import { DashboardComponent } from "./me/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: "me",
    component: LayoutComponent,
    children: [
      {path:"dashboard",loadChildren:'./me/dashboard/dashboard.module#DashboardModule',data:{breadcrumb:'Dashboard'}},
      { path: "", redirectTo: "devices", pathMatch: "full" },      
      {
        path: "devices",
        loadChildren: "./me/device/device.module#DeviceModule",
        data: { breadcrumb: "Devices" },
      },
      { path: 'clients', loadChildren: './me/clients/clients.module#ClientsModule', data: { breadcrumb: 'Clients' } },
      { path: 'projects', loadChildren: './me/projects/projects.module#ProjectsModule', data: { breadcrumb: 'Projects' } },
      { path: 'admin', loadChildren: './me/admin/admin.module#AdminModule', data: { breadcrumb: 'Carriers' } },
    ],
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent},
  {
    path: "**",
    component: NotFoundComponent,
    data: { breadcrumb: "Not found" },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //  preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});
