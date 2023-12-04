import Link from "next/link";
import createApolloClient from "../utils/apollo-client";
import { gql } from "@apollo/client";

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
    <section id="collaborators" className="py-12 text-center">
      <ul className="flex flex-wrap justify-center gap-4 text-xl font-bold">
        {allCollaborators.map((collaborator: any) => (
          <li key={collaborator.id}>
            <Link
              href={`latest-work/${collaborator.slug}`}
              className="whitespace-nowrap hover:underline"
            >
              {collaborator.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
