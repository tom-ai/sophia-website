import Link from "next/link";

type ButtonProps = {
  href: string;
  children: string;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      className="bg-harmonyPalette-blue-600 text-harmonyPalette-blue-100 self-start rounded-md px-6 py-3"
      href={href}
      rel="me noreferrer"
    >
      {children}
    </Link>
  );
}
