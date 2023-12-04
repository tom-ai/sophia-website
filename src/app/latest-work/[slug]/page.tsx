import { gql } from "@apollo/client";
import createApolloClient from "@/app/utils/apollo-client";
import { notFound } from "next/navigation";
import PostList from "@/app/components/PostList";
import { Breadcrumbs, BreadcrumbItem, Link } from "@nextui-org/react";

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
    <>
      <section className="flex flex-col gap-3 py-12">
        <Breadcrumbs>
          <BreadcrumbItem href="/latest-work">Latest Work</BreadcrumbItem>
          <BreadcrumbItem href={`/latest-work/${collaborator.name}`}>
            {collaborator.name}
          </BreadcrumbItem>
        </Breadcrumbs>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex space-x-1">
            <li>
              <Link
                color="foreground"
                className="text-foreground/50"
                href="/latest-work"
              >
                Latest Work
              </Link>
            </li>
            <li>
              <span className="text-foreground/50 flex items-center">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <Link
                  href={`/latest-work/${collaborator.slug}`}
                  color="foreground"
                >
                  {collaborator.name}
                </Link>
              </span>
            </li>
          </ol>
        </nav>
        <h3 className="text-2xl font-bold">{collaborator.name}</h3>
        <PostList posts={collaborator.posts} />
      </section>
    </>
  );
}

// get params, pass it to child component

// if params is null, render allPosts
// if params is not not null, render allPostsByCollaborator
