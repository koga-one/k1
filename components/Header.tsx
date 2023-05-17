import Link from "next/link";
import { links } from "./header.json";

export default function Header() {
  return (
    <header className="flex p-3 justify-around uppercase font-semibold text-2xl">
      {links.map((link) => {
        return (
          <Link
            className="hover:text-red-500 text-black transition-colors"
            href={link.href}
          >
            {link.title}
          </Link>
        );
      })}
    </header>
  );
}
