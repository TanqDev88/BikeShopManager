import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: 'home',//loclahost:4200/home
    component: HomeComponent
  },
  {
    path: 'admin',//loclahost:4200/admin
    component: AdminComponent
  },
  {
    path: 'galeria',//loclahost:4200/galeria
    component: AdminComponent
  },
  {
    path: 'image/id',//loclahost:4200/image/${idImagenQueSeHaceClick}
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
