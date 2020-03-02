import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayoutComponent } from './payout/payout.component';

const routes: Routes = [
  { path: 'payout', component: PayoutComponent },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
