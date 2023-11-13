import Link from 'next/link';
// import useCollaborators from './hooks/useCollaborators';
import { useParams } from 'next/navigation';
import { api } from './utils/api';

export default function Home() {
  return (
    <>
      <Hero />
      <Image />
      <Collaborators />
      <About />
    </>
  );
}

async function Collaborators() {
  const collaborators = await api.getCollaborators();

  return (
    <section id="collaborators">
      <h2>Collaborators</h2>
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
    <section id="#about">
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

function Hero() {
  return (
    <>
      <p>The most awesome violist in the world</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Link role="button" href="" aria-disabled>
          About Sophia
        </Link>
        <Link className="outline" role="button" href="https://instagram.com/">
          Follow on Instagram
        </Link>
      </div>
    </>
  );
}
