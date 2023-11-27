import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
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

  constructor() { }
}
