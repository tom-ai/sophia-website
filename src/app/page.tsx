import Link from 'next/link';
import { api } from './utils/api';
import createApolloClient from './utils/apollo-client';
import { gql } from '@apollo/client';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Collaborators />
        <About />
      </main>
    </>
  );
}

async function Collaborators() {
  const collaborators = [
    { name: 'James Blake', slug: 'james-blake' },
    { name: 'Outlook Orchestra', slug: 'outlook-orchestra' },
    { name: 'Floating Points', slug: 'floating-points' },
    { name: 'Bonobo', slug: 'bonobo' },
    { name: 'Emika', slug: 'emika' },
    { name: 'Submotion Orchestra', slug: 'submotion-orchestra' },
    { name: 'Maribou State', slug: 'maribou-state' },
    { name: 'Nitin Sawhney', slug: 'nitin-sawhney' },
    { name: 'Portico Quartet', slug: 'portico-quartet' },
    { name: 'Anushka', slug: 'anushka' },
    { name: 'Cinematic Orchestra', slug: 'cinematic-orchestra' },
    { name: 'Fatima Yamaha', slug: 'fatima-yamaha' },
    { name: 'Jon Hopkins', slug: 'jon-hopkins' },
    { name: 'Hidden Orchestra', slug: 'hidden-orchestra' },
    { name: 'Jamie xx', slug: 'jamie-xx' },
  ];

  return (
    <section id="collaborators">
      <ul>
        {collaborators.map((collaborator, i) => (
          <li key={i}>
            <Link href={`latestwork/${collaborator.slug}`}>
              {collaborator.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

async function Hero() {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query HeroSection {
          heroSection {
            title
            body
            ctaText
            image {
              url
              title
            }
          }
        }
      `,
    });
    return data;
  }

  const { heroSection } = await getData();

  return (
    <>
      <header>
        <hgroup>
          <h2>{heroSection.title}</h2>
          <h3>{heroSection.body}</h3>
        </hgroup>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p>
            <Link href="" role="button">
              {heroSection.ctaText}
            </Link>
          </p>
          <p>
            <Link className="outline" role="button" href="#about">
              About Sophia
            </Link>
          </p>
        </div>
      </header>
      <figure>
        <Image
          src={heroSection.image.url}
          width={360}
          height={360}
          alt={heroSection.image.alt}
        />
        <figcaption>{heroSection.image.title}</figcaption>
      </figure>
    </>
  );
}

async function About() {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query AboutSection {
          aboutSection {
            title
            body
            ctaText
          }
        }
      `,
    });

    return data;
  }

  const { aboutSection } = await getData();

  return (
    <section id="about">
      <h2>{aboutSection.title}</h2>
      <p>{aboutSection.body}</p>
    </section>
  );
}
