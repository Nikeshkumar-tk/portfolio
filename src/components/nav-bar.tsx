import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center px-20 justify-center">
        <NavLinks />
      </div>
    </header>
  );
}

function NavLinks() {
  return (
    <div className="flex h-14 items-center gap-9">
      {siteConfig.nav_links.map((link) => (
        <a key={link.link} href={link.link} className="hover:animate-bounce line-clamp-2 text-lg leading-snug text-gray-700 font-mono">
          {link.header}
        </a>
      ))}
    </div>
  );
}
