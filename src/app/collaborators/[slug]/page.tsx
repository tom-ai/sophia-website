import { api } from '@/app/utils/api';
import TextBlock from '@/app/components/TextBlock';

export default async function Collaborator({
  params,
}: {
  params: { slug: string };
}) {
  const collaborator = await api.getCollaborator(params.slug);

  return (
    <>
      <header>
        <h2>{collaborator.attributes.name}</h2>
      </header>
      <article>
        <TextBlock content={collaborator.attributes.description} />
      </article>
    </>
  );
}
