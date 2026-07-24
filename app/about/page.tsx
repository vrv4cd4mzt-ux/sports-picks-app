import DisclaimerBox from "@/components/DisclaimerBox";

export default function AboutPage() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-slate-950">About</h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-700">
        Sports Picks App is an educational project for learning how a small web
        app can display sports data and create simple recommendations from
        sample statistics.
      </p>
      <div className="mt-4 max-w-2xl">
        <DisclaimerBox />
      </div>
    </section>
  );
}
