//import { Componente1Component } from './componente1/componente1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitacaoComponent } from './digitacao/digitacao.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [  
//   {path:'componente1', component:Componente1Component}  
  {path: 'digitacao', component:DigitacaoComponent},
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'dashboard', component:DashboardComponent, pathMatch:'full', canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
