import Image from "next/image";
import { Collaborators } from "./components/Collaborators";
import { Button, Link } from "@nextui-org/react";
import SectionHeader from "./components/SectionHeader";
import { performRequest } from "./lib/datocms";
import BodyText from "./components/BodyText";

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
  const PAGE_CONTENT_QUERY = `
  query Hero {
    heroSection {
      title
      subtitle
      body
      image {
        url
        title
        alt
        customData
      }
    }
  }`;

  const { heroSection } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    revalidate: 0, // update performRequest with types, make revalidate either false, 0 or a number
  });

  return (
    <header className="py-12 md:grid md:h-screen md:grid-cols-2 md:grid-rows-1 md:gap-6 2xl:h-[50vh]">
      <div>
        <hgroup className="mb-8">
          <h1 className="mb-6 max-w-md text-3xl md:text-4xl">
            {heroSection.title}
            <br />
            <span className="mb-3 font-bold">{heroSection.subtitle}</span>
          </h1>
          <p>{heroSection.body}</p>
        </hgroup>
        <div className="mb-8 flex flex-col gap-3 md:items-start">
          <Button href="contact" as={Link} color="primary">
            Contact
          </Button>
          <Button href="#about" as={Link} color="secondary">
            About Sophia
          </Button>
        </div>
      </div>
      <div className="order-first md:flex md:items-start md:justify-center">
        <figure className="relative h-96 w-full md:h-4/5">
          <Image
            src={heroSection.image.url}
            className="object-cover"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            alt={heroSection.image.alt}
            priority
          />
          <figcaption className="absolute bottom-0 -mb-8 text-foreground/50">
            <small>
              Image taken by{" "}
              <Link
                href={heroSection.image.customData.linkUrl}
                isExternal
                showAnchorIcon
                color="foreground"
                size="sm"
                className="text-foreground/50"
              >
                {heroSection.image.customData.linkText}
              </Link>
            </small>
          </figcaption>
        </figure>
      </div>
    </header>
  );
}

async function About() {
  const PAGE_CONTENT_QUERY = `
    query AboutSection {
      aboutSection {
        title
        subtitle
        body {
          value
        }
        ctaText
        image {
          url
          title
          alt
        }
      }
    }`;

  const { aboutSection } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    revalidate: 0,
  });

  return (
    <section id="about" className="py-12 md:grid md:grid-cols-2 md:gap-6">
      <figure className="relative h-96">
        <Image
          src={aboutSection.image.url}
          fill
          className="object-cover"
          sizes="(min-width: 808px) 50vw, 100vw"
          alt={aboutSection.image.alt}
        />
        <figcaption>
          <small>{aboutSection.image.title}</small>
        </figcaption>
      </figure>
      <div className="pt-8">
        <SectionHeader title={aboutSection.title} direction="right">
          <p>{aboutSection.subtitle}</p>
        </SectionHeader>
        <BodyText data={aboutSection.body} />
      </div>
    </section>
  );
}
