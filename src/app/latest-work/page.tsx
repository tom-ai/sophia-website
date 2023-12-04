import { gql } from "@apollo/client";
import createApolloClient from "@/app/utils/apollo-client";
// import Link from "next/link";
import { Post, Collaborator } from "@/app/types/types";
// import Card from "../components/Card";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

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
    <section className="flex flex-col gap-3">
      {allPosts.map((post: Post) => (
        <Card>
          <article>
            <CardHeader>
              <time>{post.date}</time>
            </CardHeader>
            <Divider />
            <CardBody>
              <blockquote>{post.message}</blockquote>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href={post.link}>
                Visit content on YouTube.
              </Link>
            </CardFooter>
          </article>
        </Card>
        // <Card post={post} key={post.id} />
      ))}
    </section>
  );
}
