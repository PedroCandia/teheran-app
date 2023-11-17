import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0.3 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms ease-out', style({ opacity: 0.5 })),
      ]),
    ]),
  ]
})

export class HomePage implements OnInit {
  canScroll = true;

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

  fpNav = [
    {
      href: 'section0',
      letter: 'M',
      msg: '메인',
      class: 'active',
      index: 0
    },
    {
      href: 'section1',
      letter: 'P',
      msg: '전문가',
      index: 1
    },
    {
      href: 'section2',
      letter: 'B',
      msg: '지사',
      index: 2
    },
    {
      href: 'section3',
      letter: 'F',
      msg: '분야',
      index: 3
    },
    {
      href: 'section4',
      letter: 'S',
      msg: '스토리',
      index: 4
    },
    {
      href: 'section5',
      letter: 'Q',
      msg: '빠른 상담',
      index: 5
    },
    {
      href: 'section6',
      index: 6
    },
  ]

  currentIndex: number = 0;
  professionals = [
    {
      src: 'main3_1.png',
      show: true,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '대표 변호사/변리사',
      bold2: '분야별 전문가',
      bold3: '이수학',
      mark: 'mark2.png',
      mark2: 'mark1.png',
    },
    {
      src: 'main3_2.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '대표 변호사/변리사',
      bold2: '분야별 전문가',
      bold3: '백상희',
      mark: '',
      mark2: 'mark1.png',
    },
    {
      src: 'main3_3.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '변호사',
      bold2: '분야별 전문가',
      bold3: '이동간',
      mark: 'mark2.png',
      mark2: '',
    },
    {
      src: 'main3_4.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '변호사',
      bold2: '분야별 전문가',
      bold3: '길인영',
      mark: '',
      mark2: 'mark2.png',
    },
    {
      src: 'main3_5.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '대표 세무사',
      bold2: '분야별 전문가',
      bold3: '서혁진',
      mark: '',
      mark2: 'mark3.png',
    },
    {
      src: 'main3_6.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '변호사',
      bold2: '분야별 전문가',
      bold3: '오대호',
      mark: '',
      mark2: 'mark2.png',
    },
    {
      src: 'main3_7.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '변호사',
      bold2: '분야별 전문가',
      bold3: '윤웅채',
      mark: '',
      mark2: 'mark1.png',
    },
    {
      src: 'main3_8.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '변리사 김신연',
      bold2: '분야별 전문가',
      mark: 'mark1.png',
    },
  ]

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (this.canScroll) {
      if (event.deltaY > 0) {
        this.scrollDown();
      } else if (event.deltaY < 0) {
        this.scrollUp();
      }
  
      this.canScroll = false;
      setTimeout(() => {
        this.canScroll = true;
      }, 1000);
    }
  }


  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {
    const FIVE_SEC_IN_MS = 5000;
    setInterval(() => {
      this.changeShowAttributeToProfessionals();
    }, FIVE_SEC_IN_MS);
  }

  changeShowAttributeToProfessionals() {
    const currentIndex = this.professionals.findIndex((prof) => prof.show);
    this.professionals[currentIndex].show = false;
    const nextIndex = (currentIndex + 1) % this.professionals.length;
    this.professionals[nextIndex].show = true;
  }

  scrollToSection(index: number) {
    this.updateActiveClass(index);

     const sectionId = this.fpNav[index].href;
     this.scrollIntoSection(sectionId);
  }

  updateActiveClass(index: number) {
    this.fpNav.forEach((navItem, i) => {
      if (i === index) {
        navItem.class = 'active';
      } else {
        navItem.class = '';
      }
    });
  }

  scrollIntoSection(sectionId: string) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollDown() {
    const currentIndex = this.fpNav.findIndex((navItem) => navItem.class === 'active');
    const nextIndex = currentIndex + 1;
  
    const lastElementFpNav = nextIndex < this.fpNav.length;
    if (lastElementFpNav) {
      this.scrollToSection(nextIndex);
      this.currentIndex = nextIndex;
    }
  }

  scrollUp() {
    const currentIndex = this.fpNav.findIndex((navItem) => navItem.class === 'active');
    const prevIndex = currentIndex - 1;

    const firstElementFpNav = prevIndex >= 0;
    if (firstElementFpNav) {
      this.scrollToSection(prevIndex);
      this.currentIndex = prevIndex;
    }
  }

  openEndMenu() {
    this.menuCtrl.open('first-menu');
  }
}
