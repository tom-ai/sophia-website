type PageHeaderProps = {
  title: string;
  children?: React.ReactNode;
  direction?: "left" | "right" | "center";
};

export default function PageHeader({
  title,
  children,
  direction = "left",
}: PageHeaderProps) {
  return (
    <header className={`py-12 text-${direction}`}>
      <hgroup>
        <h1 className="text-3xl font-bold">{title}</h1>
        {children}
      </hgroup>
    </header>
  );
}
