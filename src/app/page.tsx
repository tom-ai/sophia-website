import Link from 'next/link';
import { api } from './utils/api';
import createApolloClient from './utils/apollo-client';
import { gql } from '@apollo/client';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Image /> */}
      {/* <Collaborators /> */}
      {/* <About /> */}
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

function Image() {
  return (
    <article>
      <img
        src="https://source.unsplash.com/random"
        alt="random image from unsplash"
      />
    </article>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Sophia</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur, adipiscingelit, sed do eiusmod.
        Lorem ipsum dolor sit amet, consectetur, adipiscingelit, sed do eiusmod.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur, adipiscingelit, sed do eiusmod.
        Lorem ipsum dolor sit amet, consectetur, adipiscingelit, sed do eiusmod.
      </p>
      <iframe
        width="360"
        height="215"
        src="https://www.youtube.com/embed/IqGzwTAvosI?si=och67EXkhEEFfbvV"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
}

async function Hero() {
  async function getData() {
    const client = createApolloClient();

    const { data } = await client.query({
      query: gql`
        query {
          heroSection {
            title
            body
            ctaText
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
      </div>
    </>
  );
}
