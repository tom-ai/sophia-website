import { gql } from "@apollo/client";
import createApolloClient from "@/app/utils/apollo-client";
import { notFound } from "next/navigation";
import PostList from "@/app/components/PostList";
import PageHeader from "@/app/components/PageHeader";
import { Button, Link, Spacer } from "@nextui-org/react";

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
      <PageHeader title={collaborator.name}></PageHeader>
      <main>
        <section className="flex flex-col gap-4 py-12">
          {collaborator.posts.length > 0 ? (
            <PostList posts={collaborator.posts} />
          ) : (
            <p>No posts yet!</p>
          )}

          <Spacer />
          <Button as={Link} href="/">
            Go back
          </Button>
        </section>
      </main>
    </>
  );
}

type BreadcrumbProps = {
  currentName: string;
  currentSlug: string;
};

function Breadcrumbs({ currentName, currentSlug }: BreadcrumbProps) {
  return (
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
            <Link href={`/latest-work/${currentSlug}`} color="foreground">
              {currentName}
            </Link>
          </span>
        </li>
      </ol>
    </nav>
  );
}
