import type { Schema, Attribute } from '@strapi/strapi';

export interface IntroIntroSection extends Schema.Component {
  collectionName: 'components_intro_intro_sections';
  info: {
    displayName: 'intro-section';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    keyword: Attribute.String;
    follow: Attribute.Boolean & Attribute.DefaultTo<false>;
    index: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'intro.intro-section': IntroIntroSection;
      'seo.seo': SeoSeo;
    }
  }
}
