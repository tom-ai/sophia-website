import { Post, Collaborator } from "@/app/types/types";
import Link from "next/link";

type CardProps = {
  post: Post;
};

export default function Card({ post }: CardProps) {
  return (
    <article
      key={post.id}
      className="bg-harmonyPalette-blue-100 rounded-md px-3 py-6"
    >
      <header className="flex gap-3">
        <time>{post.date}</time>
        {post.collaborators.map((collaborator: any) => (
          <Link
            href={`/latest-work/${collaborator.slug}`}
            key={collaborator.id}
          >
            <small>{collaborator.name}</small>
          </Link>
        ))}
      </header>
      <blockquote className="font-medium">{post.message}</blockquote>

      <br />
      <footer>
        <a rel="me noreferrer" href={post.link}>
          {post.link}
        </a>
      </footer>
    </article>
  );
}
