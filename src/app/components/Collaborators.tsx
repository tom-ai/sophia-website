import createApolloClient from "../utils/apollo-client";
import { gql } from "@apollo/client";
import { Button, Link, Spacer } from "@nextui-org/react";
import SectionHeader from "./SectionHeader";
import PostList from "./PostList";

export async function Collaborators() {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query AllCollaborators {
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
      `,
    });

    return data;
  }

  const { allCollaborators, allPosts } = await getData();

  return (
    <section id="portfolio" className="py-12">
      <SectionHeader
        title="Performing with artists and orchestras"
        direction="center"
      />
      <ul className="flex flex-wrap justify-center gap-3">
        {allCollaborators.map((collaborator: any) => (
          <li key={collaborator.id}>
            <Button
              as={Link}
              color="secondary"
              isBlock
              href={`latest-work/${collaborator.slug}`}
              size="lg"
              variant="flat"
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
