import { gql } from "@apollo/client";
import createApolloClient from "@/app/utils/apollo-client";

import { Post, Collaborator } from "@/app/types/types";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Chip,
} from "@nextui-org/react";
import PostList from "../components/PostList";
import PageHeader from "../components/PageHeader";

export default async function LatestWork({
  params,
}: {
  params: { slug: string };
}) {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query LatestWork {
          allPosts(orderBy: [date_DESC]) {
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

  const { allPosts } = await getData();

  return (
    <>
      <PageHeader title="Latest Work">
        <p>Bands, session recordings and studio</p>
      </PageHeader>
      <main>
        <section className="flex flex-col gap-3 py-12">
          <PostList posts={allPosts} />
        </section>
      </main>
    </>
  );
}
