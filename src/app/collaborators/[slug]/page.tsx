'use client';
import { api } from '@/app/utils/api';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default async function Collaborator({
  params,
}: {
  params: { slug: string };
}) {
  const collaborator = await api.getCollaborator(params.slug);

  return (
    <>
      <header>
        <strong>Working with...</strong>
        <h2>{collaborator.attributes.name}</h2>
      </header>
      <article>
        {<BlocksRenderer content={collaborator.attributes.description} />}
      </article>
    </>
  );
}
