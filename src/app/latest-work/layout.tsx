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
      <header className="py-12">
        <hgroup className="mb-8">
          <h2 className="text-3xl font-bold">Latest Work</h2>
          <p>Bands, session recordings and studio</p>
        </hgroup>
      </header>
      <main>{children}</main>
    </>
  );
}
