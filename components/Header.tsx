import Link from "next/link";
import { links } from "./header.json";

export default function Header() {
  return (
    <header className="flex p-3 justify-around uppercase font-thin text-lg">
      {links.map((link) => {
        return (
          <Link
            className="border-b-2 border-slate-800 transition-colors hover:border-blue-200 px-1"
            href={link.href}
          >
            {link.title}
          </Link>
        );
      })}
    </header>
  );
}
