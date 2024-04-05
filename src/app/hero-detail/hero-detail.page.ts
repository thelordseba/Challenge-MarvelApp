import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonBackButton, IonLabel, IonItem, IonList, IonListHeader, IonImg } from '@ionic/angular/standalone';
import { Hero } from '../model/model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, TranslateModule,
    IonButtons, IonBackButton, IonLabel, IonItem, IonList, IonListHeader, IonImg]
})
export class HeroDetailPage implements OnInit {

  constructor() { }

  public hero: Hero = {} as Hero;

  ngOnInit() {
    this.hero = history.state.hero;
  }

}
