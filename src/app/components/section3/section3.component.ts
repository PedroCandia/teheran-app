import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})

export class Section3Component {
  isHovered: boolean = false;

  @HostListener('mouseover', ['$event.target']) onMouseOver(target: any) {
    if (target.classList.contains('hoverbg')) {
      this.isHovered = true;
    }
  }

  @HostListener('mouseout', ['$event.target']) onMouseOut(target: any) {
    if (target.classList.contains('hoverbg')) {
      this.isHovered = false;
    }
  }

  constructor() { }

  getBackgroundColor() {
    return this.isHovered ? 'rgba(89, 69, 51, 0.8)' : 'rgba(31, 28, 25, 0.6)';
  }
}
