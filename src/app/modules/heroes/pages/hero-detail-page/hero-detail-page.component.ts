import {Component, OnInit} from '@angular/core';
import {Hero} from '../../shared/hero.model';
import {HeroService} from '../../shared/hero.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AppConfig} from '../../../../configs/app.config';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';
import { SeoService } from 'src/app/shared/seo.service';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1, delay: 0}
    }))])
  ]
})

export class HeroDetailPageComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private seo: SeoService) {
  }

  ngOnInit() {
    const heroId = this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(heroId).subscribe((hero: Hero) => {
      this.hero = hero;

      this.seo.generateTags({
        title: 'Title | ' + hero.name,
        description: 'Description | ' + hero.name,
        image: hero.avatarUrl
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

  goToTheAnchor(): void {
    this.router.navigate([`/${AppConfig.routes.heroes}/${this.hero.id}`], {fragment: 'heroe-detail'});
  }
}
