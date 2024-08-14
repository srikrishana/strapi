import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionNewField extends Schema.Component {
  collectionName: 'components_section_new_fields';
  info: {
    displayName: 'newField';
  };
  attributes: {
    button: Attribute.String;
  };
}

export interface SectionHh extends Schema.Component {
  collectionName: 'components_section_hhs';
  info: {
    displayName: 'hh';
  };
  attributes: {
    k: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.new-field': SectionNewField;
      'section.hh': SectionHh;
    }
  }
}
