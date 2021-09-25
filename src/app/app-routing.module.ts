import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  /*
   * Makes sure we don't try to show a 404 ou error while single-spa is transitioning between routes
   * https://single-spa.js.org/docs/ecosystem-angular#configure-routes
   */
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
