type PageHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className="py-12">
      <hgroup>
        <h2 className="text-3xl font-bold">{title}</h2>
        {children}
      </hgroup>
    </header>
  );
}
