import  { PortableTextBlock } from 'sanity'

export type Post = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  mainImage: string;
  publishedAt: Date;
  categories: string[];
  body: PortableTextBlock;
}