import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutInformationComponent } from './about-information/about-information.component';
import { AllComponent } from './all/all.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
  {path:'all',component: AllComponent},
  {path:'about',component:AboutInformationComponent},
  {path:'competance',component: CompetenceComponent},
  {path:'profile',component:  ProfileUserComponent},
  {path:'',redirectTo:'competance',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
