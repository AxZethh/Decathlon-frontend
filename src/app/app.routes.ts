import { Routes } from '@angular/router';
import {CompetitorComponent} from './competitor/competitor.component';
import {ResultComponent} from './result/result.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AdminComponent} from './admin/admin.component';

export const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "admin/manage-competitors", component: CompetitorComponent},
  {path: "admin/manage-results", component: ResultComponent},
  {path: "admin", component: AdminComponent},
  {path: "**", component: NotFoundComponent},
];
