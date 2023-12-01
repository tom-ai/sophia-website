// import { useParams } from 'next/navigation';

export default function LatestWorkLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <>
      <header>
        <hgroup>
          <h2>Latest Work</h2>
          <p>Bands, session recordings and studio</p>
        </hgroup>
      </header>
      <main>{children}</main>
    </>
  );
}
