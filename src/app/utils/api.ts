export class api {
  static url = 'http://127.0.0.1:1337/api';

  static async getCollaborators() {
    const path = '/collaborators?fields[0]=name&fields[1]=slug';
    const res = await fetch(this.url + path);

    const { data } = await res.json();
    return data;
  }

  static async getCollaborator(slug: string) {
    const path = `/collaborators/${slug}?fields[0]=name`;
    const res = await fetch(this.url + path);

    const { data } = await res.json();
    return data;
  }
}
