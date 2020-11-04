import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const horizontalMenuItems = [
    // new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
]

export const adminMenuItems = [

    new Menu (1, 'Dashboard', '/me/dashboard', null, 'dashboard', null, false, 0,"white"),
    // new Menu (2, 'Analytics', '/me/analytics', null, 'analytics', null, false, 0,"white"), 
    new Menu (3, 'Clients', '/me/clients', null, 'groups', null, false, 0,"white"), 
    new Menu (4, 'Projects', '/me/projects', null, 'business_center', null, false, 0,"white"), 
    new Menu (5, 'Devices', '/me/devices', null, 'dns', null, false, 0,"white"), 
    new Menu (6, 'Admin', '/me/admin', null, 'admin_panel_settings', null, true, 0,"white"),   
    new Menu (7, 'Master Data', '/me/admin/masterdata', null, 'reorder', null, false, 6,"white"),  
    new Menu (8, 'Users', '/me/admin/users', null, 'people', null, false, 6,"white"), 
    new Menu (9, 'Settings', '/me/admin/settings', null, 'settings', null, false, 6,"white"), 
    new Menu (10, 'Lookup Options', '/me/admin/lookup', null, 'search', null, false, 6,"white"),

]
 