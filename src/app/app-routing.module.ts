import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ComputerProgrammingComponent } from './components/pages/computer-programming/computer-programming.component';
import { JakartaServletComponent } from './components/pages/jakarta-servlet/jakarta-servlet.component';


const routes: Routes = [
  { path: ''                    , component: HomeComponent },
  { path: 'computer-programming', component: ComputerProgrammingComponent },
  { path: 'jakarta-servlet'     , component: JakartaServletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
