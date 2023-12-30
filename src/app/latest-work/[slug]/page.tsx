import { notFound } from "next/navigation";
import PostList from "@/app/components/PostList";
import PageHeader from "@/app/components/PageHeader";
import { Button, Link, Spacer } from "@nextui-org/react";
import { performRequest } from "@/app/lib/datocms";
import BodyText from "@/app/components/BodyText";

export async function generateStaticParams() {
  const PAGE_CONTENT_QUERY = `
  query AllCollaborators {
    allCollaborators {
      slug
    }
  }
  `;

  const { allCollaborators } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    revalidate: false,
  });

  return allCollaborators.map((collaborator: any) => collaborator.slug);
}

export default async function LatestWork({
  params,
}: {
  params: { slug: string };
}) {
  const PAGE_CONTENT_QUERY = `
    query collaboratorBySlug($slug: String) {
      collaborator(filter: { slug: { eq: $slug } }) {
        id
        slug
        name
        body {
          value
        }
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
    }`;

  const { collaborator } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { slug: params.slug },
    revalidate: false,
  });

  if (!collaborator) return notFound();

  return (
    <>
      <PageHeader title={collaborator.name}></PageHeader>
      <main>
        <section className="flex flex-col gap-4 py-12">
          <BodyText data={collaborator.body} />
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
