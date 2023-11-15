import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  icons = [
    {
      src: "../../assets/icon/logo_icon.png",
      txt: '공식 블로그'
    },
    {
      src: "../../assets/icon/tel_icon.png",
      txt: '1668-4636'
    },
    {
      src: "../../assets/icon/msg_icon.png",
      txt: '채팅 상담'
    },
    {
      src: "../../assets/icon/map_icon.png",
      txt: '오시는 길'
    },
    {
      src: "../../assets/icon/doc_icon.png",
      txt: '브로슈어'
    }
  ]

  constructor() {}
}
