import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/picks", label: "Picks" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-bold text-slate-950">
          Sports Picks App
        </Link>
        <div className="flex gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
