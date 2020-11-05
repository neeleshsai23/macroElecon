import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { Menu } from "./menu.model";
import { verticalMenuItems, horizontalMenuItems, adminMenuItems } from "./menu";

@Injectable()
export class MenuService {
  
  verticalMenuItems: any;
  horizontalMenuItems: any;
  userType: any;
  
  constructor(private location: Location, private router: Router) {
    this.userType = localStorage.getItem('userType');
    let temp = [];
    if (this.userType == 'admin') {
      temp.push(
        new Menu (1, 'Dashboard', '/me/dashboard', null, 'dashboard', null, false, 0,"white",true),
        // new Menu (2, 'Analytics', '/me/analytics', null, 'analytics', null, false, 0,"white"), 
        new Menu (3, 'Clients', '/me/clients', null, 'groups', null, false, 0,"white",true), 
        new Menu (4, 'Projects', '/me/projects', null, 'business_center', null, false, 0,"white",true), 
        new Menu (5, 'Devices', '/me/devices', null, 'dns', null, false, 0,"white",true), 
        new Menu (6, 'Admin', '/me/admin', null, 'admin_panel_settings', null, true, 0,"white",true),   
        new Menu (7, 'Master Data', '/me/admin/masterdata', null, 'reorder', null, false, 6,"white",true),  
        new Menu (8, 'Users', '/me/admin/users', null, 'people', null, false, 6,"white",true), 
        new Menu (9, 'Settings', '/me/admin/settings', null, 'settings', null, false, 6,"white",true), 
        new Menu (10, 'Lookup Options', '/me/admin/lookup', null, 'search', null, false, 6,"white",true),
        );
      } else if (this.userType == 'tenant') {
        temp.push(
          new Menu (1, 'Dashboard', '/simc/dashboard', null, 'dashboard', null, false, 0,"white",true),
          // new Menu (2, 'Analytics', '/me/analytics', null, 'analytics', null, false, 0,"white"), 
          // new Menu (3, 'Clients', '/clients', null, 'groups', null, false, 0,"white",true), 
          new Menu (4, 'Projects', '/simc/projects', null, 'business_center', null, false, 0,"white",true), 
          new Menu (5, 'Devices', '/simc/devices', null, 'dns', null, false, 0,"white",true), 
          new Menu (6, 'User', '/simc/user', null, 'admin_panel_settings', null, true, 0,"white",true),   
          // new Menu (7, 'Master Data', '/me/admin/masterdata', null, 'reorder', null, false, 6,"white",true),  
          new Menu (8, 'Users', '/simc/user/users', null, 'people', null, false, 6,"white",true), 
          new Menu (9, 'Settings', '/simc/user/settings', null, 'settings', null, false, 6,"white",true), 
          // new Menu (10, 'Lookup Options', '/me/admin/lookup', null, 'search', null, false, 6,"white",true),
          );
        }
        
        this.verticalMenuItems = temp;
        this.horizontalMenuItems = temp;
      }
      
      public getVerticalMenuItems(): Array<Menu> {
        return this.verticalMenuItems;
      }
      
      public getHorizontalMenuItems(): Array<Menu> {
        return this.horizontalMenuItems;
      }
      
      public getAdminMenuItems(): Array<Menu> {
        return adminMenuItems;
      }
      
      public expandActiveSubMenu(menu: Array<Menu>) {
        let url = this.location.path();
        let routerLink = url; // url.substring(1, url.length);
        let activeMenuItem = menu.filter((item) => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
          let menuItem = activeMenuItem[0];
          while (menuItem.parentId != 0) {
            let parentMenuItem = menu.filter(
              (item) => item.id == menuItem.parentId
              )[0];
              menuItem = parentMenuItem;
              this.toggleMenuItem(menuItem.id);
            }
          }
        }
        
        public toggleMenuItem(menuId) {
          let menuItem = document.getElementById("menu-item-" + menuId);
          let subMenu = document.getElementById("sub-menu-" + menuId);
          if (subMenu) {
            if (subMenu.classList.contains("show")) {
              subMenu.classList.remove("show");
              menuItem.classList.remove("expanded");
            } else {
              subMenu.classList.add("show");
              menuItem.classList.add("expanded");
            }
          }
        }
        
        public closeOtherSubMenus(menu: Array<Menu>, menuId) {
          let currentMenuItem = menu.filter((item) => item.id == menuId)[0];
          if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach((item) => {
              if (item.id != menuId) {
                let subMenu = document.getElementById("sub-menu-" + item.id);
                let menuItem = document.getElementById("menu-item-" + item.id);
                if (subMenu) {
                  if (subMenu.classList.contains("show")) {
                    subMenu.classList.remove("show");
                    menuItem.classList.remove("expanded");
                  }
                }
              }
            });
          }
        }
      }
      