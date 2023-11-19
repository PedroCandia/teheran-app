import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuComponent } from '../components/menu/menu.component';
import { Section0Component } from '../components/section0/section0.component';
import { Section1Component } from '../components/section1/section1.component';
import { Section2Component } from '../components/section2/section2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MenuComponent, Section0Component, Section1Component, Section2Component]
})
export class HomePageModule {}