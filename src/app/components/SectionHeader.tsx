type SectionHeaderProps = {
  title: string;
  children?: React.ReactNode;
  direction?: "left" | "center" | "right";
};

export default function SectionHeader({
  title,
  children,
  direction = "left",
}: SectionHeaderProps) {
  return (
    <hgroup className={`text-${direction} mb-8`}>
      <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
      {children}
    </hgroup>
  );
}
