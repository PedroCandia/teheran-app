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
      txt: '공식 블로그',
      target: '_blank',
      href: 'https://blog.naver.com/ktk0bx48'
    },
    {
      src: "../../assets/icon/tel_icon.png",
      txt: '1668-4636',
      href: "tel:1668-4636"
    },
    {
      src: "../../assets/icon/msg_icon.png",
      txt: '채팅 상담',
      target: '_blank',
      href: 'https://teheran.channel.io/home'
    },
    {
      src: "../../assets/icon/map_icon.png",
      txt: '오시는 길',
      href: 'https://www.thr-law.co.kr/roadmap'
    },
    {
      src: "../../assets/icon/doc_icon.png",
      txt: '브로슈어',
      href: 'https://www.thr-law.co.kr/images/bottom/teheran_brochure.pdf'
    }
  ]

  constructor() {}
}
