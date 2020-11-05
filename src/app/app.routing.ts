import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./me/not-found/not-found.component";
import { DashboardComponent } from "./me/dashboard/dashboard.component";

export const routes: Routes = [
  
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent,data:{breadcrumb:"Login"}},
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
  {
    path:"simc",component:LayoutComponent,
    children:[
      {
        path:"dashboard",loadChildren:'./me/client/client-dashboard/client-dashboard.module#ClientDashboardModule',data:{breadcrumb:"Dashboard"},
      },
      {
        path:"projects",loadChildren:'./me/client/client-projects/client-projects.module#ClientProjectsModule',data:{breadcrumb:"Projects"}
      },
      {
        path:"devices",loadChildren:'./me/client/client-device/client-device.module#ClientDeviceModule',data:{breadcrumb:"Devices"}
      },
      {
        path:"user",loadChildren:'./me/client/user/user.module#UserModule',data:{breadcrumb:"User"}
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent,
    data: { breadcrumb: "Not found" },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //  preloadingStrategy: PreloadAllModules, 
  // useHash: true
});
