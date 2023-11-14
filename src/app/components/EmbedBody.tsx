import { sanitize } from 'isomorphic-dompurify';

export default function EmbedBody({ text }: { text: string }) {
  // add title attribute as alt text
  // sandbox attribute?

  const clean = sanitize(text, {
    ALLOWED_TAGS: ['iframe'],
    ALLOWED_ATTR: ['loading', 'allow', 'src', 'width', 'height'],
  });

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: clean }} />
    </>
  );
}
