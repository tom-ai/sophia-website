import { gql } from '@apollo/client';
import createApolloClient from '@/app/utils/apollo-client';
import Post, { PostProps } from '../components/Post';

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
        {allPosts.map((post: PostProps) => (
          <article key={post.id}>
            <header>
              <time>{post.date}</time>
              <p>
                <small>
                  {post.collaborators.map(
                    (collaborator: any) => collaborator.name
                  )}
                </small>
              </p>
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
