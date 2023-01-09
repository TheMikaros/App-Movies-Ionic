import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-back',
  templateUrl: './slideshow-back.component.html',
  styleUrls: ['./slideshow-back.component.scss'],
})
export class SlideshowBackComponent implements OnInit {

  constructor() { }

  @Input() peliculas: Pelicula[] = [];

  ngOnInit() {}



  verDetalle(id:string){

  }
}
