import type { Match } from "@/types/match";

type RecommendationCardProps = {
  match: Match;
};

function getRecommendation(match: Match) {
  const difference = Math.abs(match.teamAWinRate - match.teamBWinRate);

  if (difference < 5) {
    return {
      pick: "No strong pick",
      reason:
        "Both teams have similar win rates, so this sample model does not show a clear edge."
    };
  }

  const recommendedTeam =
    match.teamAWinRate > match.teamBWinRate ? match.teamA : match.teamB;
  const strongerRate = Math.max(match.teamAWinRate, match.teamBWinRate);

  return {
    pick: recommendedTeam,
    reason: `${recommendedTeam} has the stronger sample win rate at ${strongerRate}%.`
  };
}

export default function RecommendationCard({ match }: RecommendationCardProps) {
  const recommendation = getRecommendation(match);

  return (
    <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 p-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
        Recommended pick
      </p>
      <p className="mt-2 text-xl font-bold text-slate-950">
        {recommendation.pick}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        {recommendation.reason}
      </p>
    </div>
  );
}
