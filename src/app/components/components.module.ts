import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackComponent } from './slideshow-back/slideshow-back.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [SlideshowBackComponent,SlideshowParesComponent, SlideshowPosterComponent, DetalleComponent ],
  imports: [
    CommonModule, IonicModule, PipesModule, SwiperModule
  ],
  exports: [SlideshowBackComponent,SlideshowParesComponent, SlideshowPosterComponent, DetalleComponent ]
})
export class ComponentsModule { }
