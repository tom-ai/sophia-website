import Link from "next/link";

type ButtonProps = {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      className={`${
        variant === "primary"
          ? "bg-harmonyPalette-blue-600 text-harmonyPalette-blue-100"
          : "bg-harmonyPalette-blue-100 text-harmonyPalette-blue-600"
      } self-start rounded-md px-6 py-3 font-medium `}
      href={href}
      rel="me noreferrer"
    >
      {children}
    </Link>
  );
}
