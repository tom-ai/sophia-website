import { api } from '@/app/utils/api';
import Iframe from 'react-iframe';
import Link from 'next/link';

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
      </header>
      {collaborator.attributes.description && (
        <section>
          <h3>About</h3>
          {/* <TextBlock content={collaborator.attributes.description} /> */}
        </section>
      )}
      <section>
        <h3>Recent Collaborations</h3>
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} id={`${post.attributes.date}`}>
              <header>
                <h4>
                  <small>{collaborator.attributes.name}</small>
                </h4>
                <p>{post.attributes.message}</p>
              </header>
              <Iframe
                url={post.attributes.embed}
                width="100%"
                height="352"
                loading="lazy"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share"
                title={`Embedded content for ${collaborator.attributes.name}`}
                allowFullScreen
                styles={{ borderRadius: '12px' }}
              />
              <footer>
                <p>
                  Posted on{' '}
                  <time dateTime={post.attributes.date}>
                    {makeDate(post.attributes.date).toLocaleDateString(
                      undefined,
                      {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      }
                    )}
                  </time>
                </p>
              </footer>
            </article>
          ))
        ) : (
          <p>
            <i>No posts yet</i>
          </p>
        )}
      </section>
    </>
  );
}