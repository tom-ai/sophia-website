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
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query AllCollaborators {
          allCollaborators {
            id
            name
            slug
          }
        }
      `,
    });
    return data;
  }

  const { allCollaborators } = await getData();
  return (
    <section id="collaborators">
      <ul>
        {allCollaborators.map((collaborator: any) => (
          <li key={collaborator.id}>
            <Link href={`latest-work/${collaborator.slug}`}>
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
          <p>{heroSection.body}</p>
        </hgroup>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            <Link href="latest-work" role="button">
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
      <figure dir="rtl">
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
            image {
              url
              alt
              title
            }
          }
        }
      `,
    });

    return data;
  }

  const { aboutSection } = await getData();

  return (
    <section id="about" className="grid">
      <figure>
        <Image
          src={aboutSection.image.url}
          width={360}
          height={360}
          alt={aboutSection.image.alt}
        />
        <figcaption>{aboutSection.image.title}</figcaption>
      </figure>
      <div>
        <hgroup dir="rtl">
          <h3>{aboutSection.title}</h3>
          <p>Violin, viola and electric violinist</p>
        </hgroup>
        <p>{aboutSection.body}</p>
        <Link href={'latest-work'} role="button">
          Latest Work
        </Link>
      </div>
    </section>
  );
}
