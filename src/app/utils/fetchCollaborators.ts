import createApolloClient from '../utils/apollo-client';
import { gql } from '@apollo/client';

const fetchCollaborators = async () => {
  const res = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      authorization: process.env.NEXT_PUBLIC_API_TOKEN || '',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `
        query AllCollaborators {
          allCollaborators {
            id
            name
          }
        }
      `,
    }),
  });

  const { data } = await res.json();
  return data;
};

export default fetchCollaborators;
