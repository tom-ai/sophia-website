'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

type TextBlockProps = {
  content: any[];
};

export default function TextBlock({ content }: TextBlockProps) {
  return <BlocksRenderer content={content} />;
}
