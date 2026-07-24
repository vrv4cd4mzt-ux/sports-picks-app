import type { Match } from "@/types/match";
import RecommendationCard from "@/components/RecommendationCard";

type MatchCardProps = {
  match: Match;
};

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-700">
            {match.sport}
          </p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">
            {match.teamA} vs {match.teamB}
          </h2>
        </div>
        <p className="text-sm text-slate-500">{match.date}</p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-md bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-950">{match.teamA}</h3>
          <p className="mt-2 text-sm text-slate-700">
            Win rate: {match.teamAWinRate}%
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Recent form: {match.teamARecentForm}
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Avg points: {match.teamAAvgPoints}
          </p>
        </div>

        <div className="rounded-md bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-950">{match.teamB}</h3>
          <p className="mt-2 text-sm text-slate-700">
            Win rate: {match.teamBWinRate}%
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Recent form: {match.teamBRecentForm}
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Avg points: {match.teamBAvgPoints}
          </p>
        </div>
      </div>

      <RecommendationCard match={match} />
    </article>
  );
}
