import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-section0',
  templateUrl: './section0.component.html',
  styleUrls: ['./section0.component.scss'],
})
export class Section0Component {

  constructor(private elRef: ElementRef) { }

  videoLoaded() {
    const videoElement = this.elRef.nativeElement.querySelector('.video1') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = true;
      videoElement.play();
    }
  }
  
  videoError() {
    console.error('Error al cargar el video.');
  }  

}
