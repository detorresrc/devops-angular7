import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable()
export class SeoService {
    constructor(
      private meta: Meta,
      private title: Title,
      private location: Location
      ) { }
    generateTags(config) {
      // default values
      config = {
        title: 'Angular Example app',
        description: 'Angular example app is a base project to start coding with Angular',
        image: 'https://angularexampleapp.com/assets/images/og.jpg',
        ...config
      };
      this.title.setTitle( config.title );
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@content' });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:site_name', content: 'content' });
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ property: 'og:url', content: `${environment.domainRoot}${this.location.path()}` });
    }
}
