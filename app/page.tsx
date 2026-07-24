import Link from "next/link";

export default function HomePage() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
        Sports Picks Demo
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
        Learn how simple stats can support a sports pick.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
        This beginner-friendly app will show sample matches and explain a basic
        recommendation using prewritten statistics. It does not predict live
        outcomes or connect to real betting data.
      </p>
      <Link
        href="/picks"
        className="mt-8 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        Start with Picks
      </Link>
    </section>
  );
}
