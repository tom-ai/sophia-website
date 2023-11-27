import Link from 'next/link';
import { api } from './utils/api';
import createApolloClient from './utils/apollo-client';
import { gql } from '@apollo/client';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Collaborators /> */}
      <About />
    </>
  );
}

async function Collaborators() {
  const collaborators = await api.getCollaborators();

  return (
    <section id="collaborators">
      <h2>Music collaborations</h2>
      <ul>
        {collaborators.map((collaborator) => (
          <li key={collaborator.id}>
            <Link href={`collaborators/${collaborator.attributes.slug}`}>
              {collaborator.attributes.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
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
      <h2>{heroSection.title}</h2>
      <p>{heroSection.body}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Link href="" role="button">
          {heroSection.ctaText}
        </Link>
        <Link className="outline" role="button" href="#about">
          About Sophia
        </Link>
        <Image
          src={heroSection.image.url}
          width={360}
          height={360}
          alt={heroSection.image.alt}
        />
      </div>
    </>
  );
}
