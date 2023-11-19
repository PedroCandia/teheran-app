import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
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
export class Section1Component  implements OnInit {
  @Input() currentIndex: number;

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

  constructor() {
    this.currentIndex = 0;
  }

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
}
