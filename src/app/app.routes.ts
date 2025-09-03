import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];
