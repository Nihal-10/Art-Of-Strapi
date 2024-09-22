import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaSeo extends Schema.Component {
  collectionName: 'components_meta_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desciption: Attribute.Text & Attribute.Required;
    ogImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    viewPort: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface ProductForm extends Schema.Component {
  collectionName: 'components_product_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    name: Attribute.String;
    phone: Attribute.String;
    email: Attribute.String;
  };
}

export interface ProductGalleryRow extends Schema.Component {
  collectionName: 'components_product_gallery_rows';
  info: {
    displayName: 'galleryRow';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    url: Attribute.String;
  };
}

export interface ProductGallery extends Schema.Component {
  collectionName: 'components_product_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    row: Attribute.Component<'product.gallery-row', true>;
  };
}

export interface ProductTableRow extends Schema.Component {
  collectionName: 'components_product_table_rows';
  info: {
    displayName: 'tableRow';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    dateOfPublish: Attribute.Date & Attribute.Required;
    pdf: Attribute.Media<'files'> & Attribute.Required;
  };
}

export interface ProductTable extends Schema.Component {
  collectionName: 'components_product_tables';
  info: {
    displayName: 'table';
  };
  attributes: {
    row: Attribute.Component<'product.table-row', true> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta.seo': MetaSeo;
      'product.form': ProductForm;
      'product.gallery-row': ProductGalleryRow;
      'product.gallery': ProductGallery;
      'product.table-row': ProductTableRow;
      'product.table': ProductTable;
    }
  }
}
