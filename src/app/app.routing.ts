import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewAllComponent } from './view-all/view-all.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'view',
    component: ViewAllComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
