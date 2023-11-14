import { api } from '@/app/utils/api';
import TextBlock from '@/app/components/TextBlock';
import EmbedBody from '@/app/components/EmbedBody';
import Iframe from 'react-iframe';

export default async function Collaborator({
  params,
}: {
  params: { slug: string };
}) {
  const collaborator = await api.getCollaborator(params.slug);

  //if collaborator.attributes.posts.length > 0 ...
  const posts = await api.getPostsByCollaborator(params.slug);

  function makeDate(dateString: string) {
    return new Date(dateString);
  }

  return (
    <>
      <header>
        <h2>{collaborator.attributes.name}</h2>
        <TextBlock content={collaborator.attributes.description} />
      </header>
      <article>
        <h3>Recent Posts</h3>
        {posts.length > 0 ? (
          posts.map((post) => (
            <figure key={post.id}>
              <Iframe
                url={post.attributes.embed}
                width="100%"
                height="352"
                loading="lazy"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share"
                title={`Embedded content for ${collaborator.attributes.name}`}
                allowFullScreen
              />
              <figcaption>
                <time dateTime={post.attributes.date}>
                  {makeDate(post.attributes.date).toLocaleDateString(
                    undefined,
                    {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </time>
                <br />
                <p>{post.attributes.message}</p>
              </figcaption>
            </figure>
          ))
        ) : (
          <p>
            <i>No posts yet</i>
          </p>
        )}
      </article>
    </>
  );
}
