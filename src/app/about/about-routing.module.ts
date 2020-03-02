import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about.component';
import { PayoutComponent } from '@app/payout/payout.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', component: AboutComponent, data: { title: extract('About') } },
    { path: 'payout', component: PayoutComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule {}
