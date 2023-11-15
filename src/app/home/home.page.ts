import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  icons = [
    {
      src: "../../assets/icon/logo_icon.png"
    },
    {
      src: "../../assets/icon/tel_icon.png"
    },
    {
      src: "../../assets/icon/msg_icon.png"
    },
    {
      src: "../../assets/icon/map_icon.png"
    },
    {
      src: "../../assets/icon/doc_icon.png"
    }
  ]

  constructor() {}
}
