"use client";

import { useMemo, useState } from "react";
import DisclaimerBox from "@/components/DisclaimerBox";
import MatchCard from "@/components/MatchCard";
import SportSelector from "@/components/SportSelector";
import matchesData from "@/data/matches.json";
import type { Match } from "@/types/match";

const matches = matchesData as Match[];

export default function PicksPage() {
  const [selectedSport, setSelectedSport] = useState("All");

  const sports = useMemo(() => {
    return Array.from(new Set(matches.map((match) => match.sport)));
  }, []);

  const filteredMatches =
    selectedSport === "All"
      ? matches
      : matches.filter((match) => match.sport === selectedSport);

  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-950">Picks</h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-700">
          Choose a sport to compare sample matches and see a basic recommended
          pick based on win rate.
        </p>
      </section>

      <DisclaimerBox />

      <SportSelector
        sports={sports}
        selectedSport={selectedSport}
        onSelectSport={setSelectedSport}
      />

      <section className="grid gap-5">
        {filteredMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </section>
    </div>
  );
}
