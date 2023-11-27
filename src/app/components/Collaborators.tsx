'use client';
import { useEffect, useState } from 'react';
import fetchCollaborators from '../utils/fetchCollaborators';

export function Collaborators() {
  const [allCollaborators, setAllCollaborators] = useState([]);

  useEffect(() => {
    fetchCollaborators().then(({ allCollaborators }) =>
      setAllCollaborators(allCollaborators)
    );
  }, []);

  return (
    <section id="collaborators">
      <ul>
        {allCollaborators.map((collaborator: any) => (
          <li key={collaborator.id}>
            <p>{collaborator.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
