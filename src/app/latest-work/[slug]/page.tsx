import { gql } from "@apollo/client";
import createApolloClient from "@/app/utils/apollo-client";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query AllCollaborators {
          allCollaborators {
            slug
          }
        }
      `,
    });

    return data;
  }

  const { allCollaborators } = await getData();

  return allCollaborators.map((collaborator: any) => collaborator.slug);
}

export default async function LatestWork({
  params,
}: {
  params: { slug: string };
}) {
  async function getData(slug: string) {
    const client = createApolloClient();
    const { data } = await client.query({
      variables: { slug },
      query: gql`
        query collaboratorBySlug($slug: String) {
          collaborator(filter: { slug: { eq: $slug } }) {
            id
            slug
            name
            posts {
              id
              message
              date
              link
              collaborators {
                id
                name
                slug
              }
            }
          }
        }
      `,
    });

    return data;
  }

  const { collaborator } = await getData(params.slug);

  if (!collaborator) return notFound();

  return (
    <section>
      <h3 className="text-2xl font-bold">{collaborator.name}</h3>
      <div className="grid">
        {collaborator.posts.map((post: any) => (
          <article key={post.id}>
            <header>
              <time>{post.date}</time>
              <div>
                {post.collaborators.map((collaborator: any) => (
                  <Link
                    href={`/latest-work/${collaborator.slug}`}
                    key={collaborator.id}
                  >
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

// get params, pass it to child component

// if params is null, render allPosts
// if params is not not null, render allPostsByCollaborator
