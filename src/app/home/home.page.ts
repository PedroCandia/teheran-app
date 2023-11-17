import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
      href: '#4thpage',
      letter: 'B',
      msg: '지사',
      index: 2
    },
    {
      href: '#5thpage',
      letter: 'F',
      msg: '분야',
      index: 3
    },
    {
      href: '#6thpage',
      letter: 'S',
      msg: '스토리',
      index: 4
    },
    {
      href: '#7thpage',
      letter: 'Q',
      msg: '빠른 상담',
      index: 5
    },
    {
      href: '#lastPage',
      index: 6
    },
  ]

  professionals = [
    {
      src: 'main3_8.png',
      show: false,
      msg1: '검증된 실력, 차별화된 전문성',
      msg2: '테헤란',
      msg3: '변리사 김신연',
      bold2: '분야별 전문가',
      mark: 'mark1.png',
      animationClass: 'fade-out',
    },
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
      animationClass: 'fade-in',
    }
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


  constructor() {}

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
    }
  }

  scrollUp() {
    const currentIndex = this.fpNav.findIndex((navItem) => navItem.class === 'active');
    const prevIndex = currentIndex - 1;

    const firstElementFpNav = prevIndex >= 0;
    if (firstElementFpNav) {
      this.scrollToSection(prevIndex);
    }
  }
}
