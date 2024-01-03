import { Card, Chip, Link, CardBody } from "@nextui-org/react";
import Image from "next/image";

type PostListProps = {
  posts: any;
};

export default function PostList({ posts }: PostListProps) {
  return posts.map((post: any) => (
    <Card className="">
      <article>
        <CardBody className="flex gap-3 md:flex-row">
          {post.embed && (
            <div className="relative my-auto flex aspect-video h-28">
              <Image
                src={post.embed.thumbnailUrl}
                alt={post.embed.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col justify-between space-y-4">
            <div className="flex flex-col">
              <time>
                <small className="text-primary-foreground/60">
                  {post.date}
                </small>
              </time>
              <blockquote>{post.message}</blockquote>
            </div>
            <div className="flex flex-wrap gap-2">
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
            {post.embed && (
              <Link isExternal showAnchorIcon href={post.embed.url}>
                Visit content on YouTube.
              </Link>
            )}
          </div>
        </CardBody>
      </article>
    </Card>
  ));
}
