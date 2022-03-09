import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'vehicle',component:VehiclesComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}