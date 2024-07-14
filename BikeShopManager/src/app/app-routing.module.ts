import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { AboutComponent } from './components/about/about.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';


const routes: Routes = [
  {
    path: 'home',// localhost:4200/home
    component: HomeComponent
  },
  {
    path: 'admin',// localhost:4200/admin
    component: ViewRegistrationComponent
  },
  {
    path: 'admin/view/:id',// localhost:4200/admin/view/${idDeLaFilaQueSeHaceClick}
    component: AdminComponent
  },
  {
    path: 'galeria',// localhost:4200/galeria
    component: ImageGalleryComponent
  },
  {
    path: 'image/:id',// localhost:4200/image/${idImagenQueSeHaceClick}
    component: ImageDetailsComponent
  },
  {
    path: 'home/:id',// localhost:4200/home/:id
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
