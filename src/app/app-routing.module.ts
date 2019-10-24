import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  // { path: '**', redirectTo: 'grid', pathMatch: 'full' },
  { path: 'grid', component: GridViewComponent},
  { path: 'profile/:username', component: ProfileViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
