import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
  {path:'all',component: AllComponent},
  {path:'profile',component:  ProfileUserComponent},
  {path:'',redirectTo:'all',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
