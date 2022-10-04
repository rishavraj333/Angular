import { Component, OnInit } from '@angular/core';
import { Image } from '../Image';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  imagedata = [
    new Image("assets.e-cart app.jpg")
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
