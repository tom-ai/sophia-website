'use client';
import { Collaborator } from '../types/Collaborator';
import { api } from '../utils/api';
import { useState, useEffect } from 'react';

export default function useCollaborator(slug: string): {
  collaborator: Collaborator | null;
  loading: boolean;
} {
  const [collaborator, setCollaborator] = useState<Collaborator | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);

    api.getCollaborator(slug).then((data) => {
      setCollaborator(data);
      setLoading(false);
    });
  }, []);

  return { collaborator, loading };
}
