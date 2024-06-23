import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { FilterimagesPipe } from './pipes/filterimages.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ImageGalleryComponent,
    FilterimagesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, //Se agrega el modulo para el manejo de forularios reactivos
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
