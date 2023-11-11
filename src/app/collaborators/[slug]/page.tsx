'use client';

export default function Collaborator({ params }: { params: { slug: string } }) {
  return (
    <header>
      <h3>Working with...</h3>
      <h2>{params.slug}</h2>
    </header>
  );
}
