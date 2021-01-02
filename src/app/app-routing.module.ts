import { SuccessComponent } from './Pages/success/success.component';
import { LoginComponent } from './Pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '*', component: LoginComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
