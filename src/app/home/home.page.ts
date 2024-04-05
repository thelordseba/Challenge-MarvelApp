import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, 
  IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { HeroService } from '../service/hero.service';
import { Router } from '@angular/router';
import { Hero, MarvelResponse } from '../model/model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonList, IonItem, IonLabel, IonThumbnail, TranslateModule]
})
export class HomePage implements OnInit {

  constructor(
    private heroeService: HeroService,
    private router: Router
    ) { }
  
  public heroes: Hero [] = []
    
  ngOnInit() {
    this.heroeService.getAllHeroes().subscribe((res: MarvelResponse) => {
      this.heroes = res.data.results;
    });
  }

  navigateToDetail(hero: Hero) {
    this.router.navigate(['/hero-detail'], { state: { hero } });
  }

}
