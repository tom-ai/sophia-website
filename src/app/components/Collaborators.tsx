import Link from 'next/link';
import createApolloClient from '../utils/apollo-client';
import { gql } from '@apollo/client';

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
    <section id="collaborators">
      <ul>
        {allCollaborators.map((collaborator: any) => (
          <li key={collaborator.id}>
            <Link href={`latest-work/${collaborator.slug}`}>
              {collaborator.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
