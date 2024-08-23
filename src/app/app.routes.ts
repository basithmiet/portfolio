import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent:()=> import('./components/home/home.component').then(c=>c.HomeComponent) 
    },
    { 
        path: 'applications',
         loadComponent:()=> import('./applications/applications.component').then(c=>c.ApplicationsComponent) 
    },
    { 
        path: 'about', 
        loadComponent:()=> import('./components/about/about.component').then(c=>c.AboutComponent) 
    },
    { 
        path: 'applications/shopping-cart', 
        loadChildren: ()=>import('./applications/shopping-cart/shopping-cart-module/shopping-cart.module').then(m=>m.ShoppingCartModule) 
    },
];