import { sanitize } from 'isomorphic-dompurify';

export default function EmbedBody({ text }: { text: string }) {
  // sanitize
  // return

  // add title attribute as alt text
  // sandbox attribute?

  const clean = sanitize(text, {
    ALLOWED_TAGS: ['iframe'],
    ALLOWED_ATTR: ['loading', 'allow', 'src', 'width', 'height'],
  });

  //   console.log('clean', clean.length, clean);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: clean }} />
    </>
  );
}
