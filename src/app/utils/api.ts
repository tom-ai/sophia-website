import { notFound } from 'next/navigation';
import { Collaborator } from '../types/Collaborator';
import { Post } from '../types/Post';

export class api {
  static url = 'http://127.0.0.1:1337/api';

  static async getCollaborators(): Promise<Collaborator[]> {
    const path = '/collaborators?fields[0]=name&fields[1]=slug';
    const res = await fetch(this.url + path, { cache: 'no-store' });

    if (!res.ok) {
      // throw new Error('Failed to fetch data');
      notFound();
    }

    const { data } = await res.json();
    return data;
  }

  static async getCollaborator(slug: string): Promise<Collaborator> {
    const path = `/collaborators/${slug}?fields[0]=name`;
    const res = await fetch(this.url + path, { cache: 'no-store' });

    if (!res.ok) {
      notFound();
    }

    const { data } = await res.json();
    return data;
  }

  static async getPostsByCollaborator(slug: string): Promise<Post[]> {
    const path = `/posts?filters[collaborators][slug][$eq]=${slug}&fields[0]=message&fields[1]=date&fields[2]=embed&fields[3]=type`;
    const res = await fetch(this.url + path, { cache: 'no-store' });

    if (!res.ok) {
      notFound();
    }

    const { data } = await res.json();
    return data;
  }
}
