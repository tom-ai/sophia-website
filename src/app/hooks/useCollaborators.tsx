export default function useCollaborators() {
  const collaborators = [
    {
      id: 1,
      name: 'Michael Jackson',
      description:
        'The King of Pop, known for his iconic contributions to music and dance.',
      slug: 'michael-jackson',
    },
    {
      id: 2,
      name: 'The Beatles',
      description:
        'Legendary English rock band, influencing generations with their innovative sound.',
      slug: 'the-beatles',
    },
    {
      id: 3,
      name: 'Beyoncé',
      description:
        'Queen Bey, a global superstar, singer, and performer with unparalleled stage presence.',
      slug: 'beyonce',
    },
    {
      id: 4,
      name: 'Elvis Presley',
      description:
        'The King of Rock and Roll, an influential figure in the history of popular music.',
      slug: 'elvis-presley',
    },
  ];
  return { collaborators };
}
