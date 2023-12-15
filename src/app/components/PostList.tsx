import {
  Card,
  CardHeader,
  Chip,
  Link,
  Divider,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import { Post } from "../types/types";

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return posts.map((post: Post) => (
    <Card className="">
      <article>
        <CardHeader>
          <div className="flex gap-2">
            <time>{post.date}</time>
            {post.collaborators.map((collaborator) => (
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
