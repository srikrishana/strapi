import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionTest extends Schema.Component {
  collectionName: 'components_section_tests';
  info: {
    displayName: 'Test';
  };
  attributes: {
    test: Attribute.Password;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.test': SectionTest;
    }
  }
}
