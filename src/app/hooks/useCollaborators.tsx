'use client';

import { Collaborator } from '../types/Collaborator';
import { api } from '../utils/api';
import { useState, useEffect } from 'react';

export default function useCollaborators(): {
  collaborators: Collaborator[];
  loading: boolean;
} {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api.getCollaborators().then((data: Collaborator[]) => {
      setCollaborators(data);
      setLoading(false);
    });
  }, []);

  return { collaborators, loading };
}
