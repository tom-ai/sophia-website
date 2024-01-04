import { notFound } from "next/navigation";
import PostList from "@/app/components/PostList";
import { Button, Link } from "@nextui-org/react";
import { performRequest } from "@/app/lib/datocms";
import BodyText from "@/app/components/BodyText";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const QUERY = `
    query collaboratorBySlug($slug: String) {
      collaborator(filter: { slug: { eq: $slug } }) {
        name
      }
    }`;

  const { collaborator } = await performRequest({
    query: QUERY,
    variables: { slug: params.slug },
    revalidate: 0,
  });

  return {
    title: collaborator.name,
    description: `Music and events with ${collaborator.name}`,
  };
}

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
    revalidate: 0,
  });

  return allCollaborators.map((collaborator: any) => collaborator.slug);
}

export default async function LatestWork({ params }: Props) {
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
          embed {
            height
            provider
            providerUid
            thumbnailUrl
            title
            url
            width
          }
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
    revalidate: 0,
  });

  if (!collaborator) return notFound();

  return (
    <>
      <header className="pt-12">
        <h1 className="text-3xl">
          Sophia Dignam &
          <br />
          <span className="font-bold">{collaborator.name}</span>
        </h1>
      </header>
      <main>
        <section className="py-12">
          <BodyText data={collaborator.body} />
        </section>
        <section className="py-12">
          <h2 className="mb-6 text-2xl font-bold">Recent Gigs</h2>
          {collaborator.posts.length > 0 ? (
            <div className="flex flex-col gap-6">
              <PostList posts={collaborator.posts} />
            </div>
          ) : (
            <p>No posts yet!</p>
          )}
          <footer className="py-12">
            <Button as={Link} href="/">
              Go back
            </Button>
          </footer>
        </section>
      </main>
    </>
  );
}
