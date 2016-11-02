import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { RegistrationRoutes } from './registration/index';
import { UsersRoutes } from './users/index';


export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...RegistrationRoutes,
  ...UsersRoutes
];
