type SportSelectorProps = {
  sports: string[];
  selectedSport: string;
  onSelectSport: (sport: string) => void;
};

export default function SportSelector({
  sports,
  selectedSport,
  onSelectSport
}: SportSelectorProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <label
        htmlFor="sport"
        className="block text-sm font-semibold text-slate-950"
      >
        Choose a sport
      </label>
      <select
        id="sport"
        value={selectedSport}
        onChange={(event) => onSelectSport(event.target.value)}
        className="mt-3 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-100"
      >
        <option value="All">All sports</option>
        {sports.map((sport) => (
          <option key={sport} value={sport}>
            {sport}
          </option>
        ))}
      </select>
    </div>
  );
}
