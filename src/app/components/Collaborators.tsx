import { Button, Link } from "@nextui-org/react";
import SectionHeader from "./SectionHeader";
import PostList from "./PostList";
import { performRequest } from "../lib/datocms";

export async function Collaborators() {
  const PAGE_CONTENT_QUERY = `
    query Collaborators {
      allCollaborators {
        id
        name
        slug
      }
      allPosts(orderBy: [date_DESC], first: 3) {
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
    `;

  const { allCollaborators, allPosts } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    revalidate: false,
  });

  return (
    <section id="portfolio" className="flex flex-col items-center py-12">
      <div className="md:w-3/5">
        <SectionHeader title="Featured Artists & Events" direction="center" />
      </div>
      <ul className="flex flex-wrap justify-center gap-3 md:w-4/5">
        {allCollaborators.map((collaborator: any) => (
          <li key={collaborator.id}>
            <Button
              as={Link}
              href={`latest-work/${collaborator.slug}`}
              size="lg"
              color="warning"
            >
              {collaborator.name}
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex flex-col gap-8">
        <PostList posts={allPosts} />
      </div>
    </section>
  );
}
