// import { notFound } from 'next/navigation';
// import { Collaborator } from '../types/Collaborator';
// import { Post } from '../types/Post';

// // const baseURL =
// //   process.env.NODE_ENV === 'production'
// //     ? process.env.STRAPI_URL
// //     : 'http://127.0.0.1:1337/api';

// export class api {
//   static async getCollaborators(): Promise<Collaborator[]> {
//     const baseURL =
//       process.env.NODE_ENV === 'production'
//         ? process.env.STRAPI_URL
//         : 'http://127.0.0.1:1337/api';

//     const path = '/collaborators?fields[0]=name&fields[1]=slug';
//     const res = await fetch(baseURL + path, { cache: 'no-store' });

//     if (!res.ok) {
//       // throw new Error('Failed to fetch data');
//       notFound();
//     }

//     const { data } = await res.json();
//     return data;
//   }

//   static async getCollaborator(slug: string): Promise<Collaborator> {
//     const baseURL =
//       process.env.NODE_ENV === 'production'
//         ? process.env.STRAPI_URL
//         : 'http://127.0.0.1:1337/api';

//     const path = `/collaborators/${slug}`;
//     const res = await fetch(baseURL + path, { cache: 'no-store' });

//     if (!res.ok) {
//       // throw new Error('Failed to fetch collaborator');
//       notFound();
//     }

//     const { data } = await res.json();
//     return data;
//   }

//   static async getPostsByCollaborator(slug: string): Promise<Post[]> {
//     const baseURL =
//       process.env.NODE_ENV === 'production'
//         ? process.env.STRAPI_URL
//         : 'http://127.0.0.1:1337/api';

//     const path = `/posts?filters[collaborator][slug][$eq]=${slug}&fields[0]=message&fields[1]=date&fields[2]=embed&populate[0]=collaborators`;
//     const res = await fetch(baseURL + path, { cache: 'no-store' });

//     if (!res.ok) {
//       // throw new Error('Failed to fetch posts');
//       notFound();
//     }

//     const { data } = await res.json();
//     return data;
//   }
// }
