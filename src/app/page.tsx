'use client';
import Link from 'next/link';
import useCollaborators from './hooks/useCollaborators';
import { useParams } from 'next/navigation';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Main />
        {/* <Route path="collaborators/:slug" element={<Collaborator />} /> */}
      </main>
      <Footer />
    </>
  );
}

function Test() {
  return <h1>test</h1>;
}

function Collaborator() {
  const { slug } = useParams();
  console.log(slug);

  return (
    <header>
      <h3>Working with...</h3>
      <h2>{slug}</h2>
    </header>
  );
}

function Main() {
  return (
    <>
      <Header />
      <Image />
      <Collaborators />
      <About />
    </>
  );
}

function Collaborators() {
  const { collaborators } = useCollaborators();

  return (
    <section id="collaborators">
      <h2>Collaborators</h2>
      <ul>
        {collaborators.map((collaborator) => (
          <li key={collaborator.id}>
            <Link href={`collaborators/${collaborator.slug}`}>
              {collaborator.name}
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

function Nav() {
  return (
    <header>
      <nav>
        <Link href={''}>
          <h1>Sophia Dignam</h1>
          <h2>
            <small>Session Musician</small>
          </h2>
        </Link>
      </nav>
    </header>
  );
}
function Header() {
  return (
    <>
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

function Footer() {
  return (
    <footer>
      <hr />
      <p>
        <small>I hope you enjoyed my website! Built by Tom ❤️</small>
      </p>
    </footer>
  );
}
