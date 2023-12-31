import {
  Card,
  CardHeader,
  Chip,
  Link,
  Divider,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import Image from "next/image";

type PostListProps = {
  posts: any;
};

export default function PostList({ posts }: PostListProps) {
  return posts.map((post: any) => (
    <Card className="">
      <article>
        <CardHeader>
          <div className="flex gap-2">
            <time>{post.date}</time>
            {post.collaborators.map((collaborator: any) => (
              <Chip
                key={collaborator.id}
                color="secondary"
                size="sm"
                variant="flat"
                as={Link}
                href={`/latest-work/${collaborator.slug}`}
              >
                {collaborator.name}
              </Chip>
            ))}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <blockquote>{post.message}</blockquote>
          {/* <Image src={} /> */}
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href={post.link}>
            Visit content on YouTube.
          </Link>
        </CardFooter>
      </article>
    </Card>
  ));
}
