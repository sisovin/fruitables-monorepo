import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateMetaTags(tags: { name: string; content: string }[]) {
    tags.forEach(tag => this.meta.updateTag(tag));
  }

  addSocialMediaMetaTags(tags: { property: string; content: string }[]) {
    tags.forEach(tag => this.meta.updateTag({ property: tag.property, content: tag.content }));
  }
}
