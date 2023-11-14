import { api } from '@/app/utils/api';
import TextBlock from '@/app/components/TextBlock';
import EmbedBody from '@/app/components/EmbedBody';

export default async function Collaborator({
  params,
}: {
  params: { slug: string };
}) {
  const collaborator = await api.getCollaborator(params.slug);

  //if collaborator.attributes.posts.length > 0 ...
  const posts = await api.getPostsByCollaborator(params.slug);

  return (
    <>
      <header>
        <h2>{collaborator.attributes.name}</h2>
        <TextBlock content={collaborator.attributes.description} />
      </header>
      <article>
        <h3>Posts</h3>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <p>{post.attributes.message}</p>
                {<EmbedBody text={post.attributes.embed} />}
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No posts yet</i>
          </p>
        )}
      </article>
    </>
  );
}
