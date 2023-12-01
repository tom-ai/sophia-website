import Link from 'next/link';
import createApolloClient from './utils/apollo-client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { Collaborators } from './components/Collaborators';

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
      <figure dir="rtl">
        <Image
          src={heroSection.image.url}
          width={360}
          height={360}
          alt={heroSection.image.alt}
          priority
        />
        <figcaption>{heroSection.image.title}</figcaption>
      </figure>
    </header>
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
