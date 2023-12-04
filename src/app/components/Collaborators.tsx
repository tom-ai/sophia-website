import createApolloClient from "../utils/apollo-client";
import { gql } from "@apollo/client";
import { Button, Link } from "@nextui-org/react";

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
        }
      `,
    });

    return data;
  }

  const { allCollaborators } = await getData();

  return (
    <section id="collaborators" className="flex py-12">
      <ul className="flex flex-wrap justify-center text-center font-bold">
        {allCollaborators.map((collaborator: any) => (
          <li key={collaborator.id}>
            <Link
              color="secondary"
              isBlock
              href={`latest-work/${collaborator.slug}`}
              size="lg"
            >
              {collaborator.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
