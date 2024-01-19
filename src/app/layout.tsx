import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: {
    template: "%s | Sophia Dignam",
    default: "Sophia Dignam - Viola and violin session musician",
  },
  description:
    "Sophia is a viola and violin session musician based in Manchester, UK",
  keywords: "Music, Viola, Strings, Orchestras, Manchester",
  metadataBase: new URL("https://www.sophiadignam.co.uk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="session">
      <body className={`${spaceMono.className} container mx-auto p-4`}>
        <Providers>
          <Navbar shouldHideOnScroll>
            <NavbarBrand>
              <Link href={"/"} color="foreground">
                <span className="font-medium tracking-tighter">SD_</span>
              </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button
                  as={Link}
                  color="primary"
                  href="/contact"
                  variant="flat"
                >
                  Contact
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer>
      <Divider />
      <div className="justify-center py-8 md:flex">
        <nav className="mb-4 w-1/3 md:mb-0">
          <ul>
            <li>
              <Link href={"/"} color="foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/contact"} color="foreground">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <address className="not-italic">
          <ul>
            <li>
              <Link
                isExternal
                showAnchorIcon
                href="https://www.instagram.com/sophiayadig/"
                rel="noreferrer me"
                color="foreground"
              >
                Instagram
              </Link>
            </li>
            <li>
              <a href="mailto:contact@sophiadignam.co.uk">
                contact@sophiadignam.co.uk
              </a>
            </li>
          </ul>
        </address>
      </div>
      <Divider />
      <div className="pb-4 pt-8 text-center">
        
        <p>
          <a href='https://encoremusicians.com/hire/violists?utm_source=badge&utm_medium=web&utm_campaign=verified_badge&utm_content=dark-small' target="_parent">
            <img src='https://encoremusicians.com/img/embeds/badge-dark.svg' alt='Book Sophia Dignam on Encore Musicians' style='width: 80px; height: 80px;'/>
          </a>
          <small>© 2023 Sophia Dignam</small>
        </p>
        <p>
          <small>I hope you enjoyed my website! Built by Tom ❤️</small>
        </p>
        
      </div>
    </footer>
  );
}
