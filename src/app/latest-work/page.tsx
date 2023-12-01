import { gql } from '@apollo/client';
import createApolloClient from '@/app/utils/apollo-client';
import Link from 'next/link';

export default async function LatestWork({
  params,
}: {
  params: { slug: string };
}) {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query LatestWork {
          allPosts(orderBy: [date_DESC]) {
            id
            message
            link
            date
            collaborators {
              id
              name
              slug
            }
          }
        }
      `,
    });

    return data;
  }

  const { allPosts } = await getData();

  return (
    <section>
      <div className="grid">
        {allPosts.map((post: any) => (
          <article key={post.id}>
            <header>
              <time>{post.date}</time>
              <div>
                {post.collaborators.map((collaborator: any) => (
                  <Link href={`/latest-work/${collaborator.slug}`}>
                    <small>{collaborator.name}</small>
                  </Link>
                ))}
              </div>
            </header>
            <blockquote>
              <strong>{post.message}</strong>
            </blockquote>

            <br />
            <footer>
              <a role="button" href={post.link} target="_blank">
                Watch/Listen
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
