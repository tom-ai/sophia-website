'use client';

import useCollaborator from '@/app/hooks/useCollaborator';

export default function Collaborator({ params }: { params: { slug: string } }) {
  const { collaborator, loading } = useCollaborator(params.slug);

  return (
    <header>
      <h3>Working with...</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        // handle nulL!
        <>{<h2>{collaborator?.attributes.name}</h2>}</>
      )}
    </header>
  );
}
