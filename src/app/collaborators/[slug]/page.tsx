import { api } from '@/app/utils/api';

export default async function Collaborator({
  params,
}: {
  params: { slug: string };
}) {
  const collaborator = await api.getCollaborator(params.slug);

  console.log(collaborator);
  return (
    <>
      <header>
        <h3>Working with...</h3>
        <h2>{collaborator.attributes.name}</h2>
      </header>
      <article>
        <p>Information here</p>
        <p>And more information here</p>
      </article>
    </>
  );
}
