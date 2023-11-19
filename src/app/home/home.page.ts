import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  canScroll = true;
  currentIndex: number = 0;

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

  menu_list = [
    [
      {
        href: 'https://www.thr-law.co.kr/intro',
        msg: '기업 소개'
      },
      {
        href: 'https://www.thr-law.co.kr/expert',
        msg: '전문가 소개'
      },
      {
        href: 'https://www.thr-law.co.kr/history',
        msg: '연혁'
      },
      {
        href: 'https://www.thr-law.co.kr/recruit',
        msg: '인재 채용'
      },
      {
        href: 'https://www.thr-law.co.kr/roadmap',
        msg: '오시는 길'
      }
    ],
    [
      {
        href: 'https://www.thr-law.co.kr/board/case',
        msg: '업무 사례'
      },
      {
        href: 'https://www.thr-law.co.kr/board/column',
        msg: '칼럼'
      },
      {
        href: 'https://www.thr-law.co.kr/board/story',
        msg: '고객 스토리'
      },
      {
        href: 'https://www.thr-law.co.kr/board/news',
        msg: '소식'
      }
    ]
  ]

  select = [
    '형사',
    '성범죄·마약',
    '음주운전',
    '지식재산권 분쟁',
    '이혼',
    '상속',
    '특허·상표·디자인',
    '회생·파산',
    '부동산·민사',
    '법인등기',
    '세무·회계',
    '개명',
    '학교폭력',
    '기타',
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
