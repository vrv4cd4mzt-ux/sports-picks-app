# Sports Picks App

Sports Picks App is a beginner-friendly web application that shows sample sports matches and generates a simple recommended pick using prewritten statistics from a local JSON file.

The app is educational. It does not use live odds, does not predict real outcomes, and is not betting or financial advice.

## Live Demo

Vercel deployment link:

Add your Vercel URL here after deployment.

## GitHub Repository

Repository link:

Add your public GitHub repository URL here after publishing.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Local JSON data

No database, authentication, Prisma, Docker, Redux, or external UI component libraries were used.

## Main Features

- Home page with a short explanation of the project
- Picks page with an interactive sport filter
- Sample matches loaded from `data/matches.json`
- Match cards that compare basic team statistics
- Simple recommendation logic based on team win rate
- About page with an educational disclaimer

## Data Flow

```text
data/matches.json
  -> app/picks/page.tsx
  -> SportSelector filters matches
  -> MatchCard displays each matchup
  -> RecommendationCard shows the suggested pick
```

## Recommendation Logic

The app uses a simple rule:

```text
If Team A win rate is higher than Team B win rate, recommend Team A.
If Team B win rate is higher than Team A win rate, recommend Team B.
If the difference is less than 5%, show "No strong pick".
```

This logic is intentionally simple so beginners can understand how app state, JSON data, and reusable components work together.

## Project Structure

```text
sports-picks-app/
├─ app/
│  ├─ page.tsx
│  ├─ picks/
│  │  └─ page.tsx
│  ├─ about/
│  │  └─ page.tsx
│  ├─ layout.tsx
│  └─ globals.css
├─ components/
│  ├─ Navbar.tsx
│  ├─ SportSelector.tsx
│  ├─ MatchCard.tsx
│  ├─ RecommendationCard.tsx
│  └─ DisclaimerBox.tsx
├─ data/
│  └─ matches.json
├─ types/
│  └─ match.ts
├─ package.json
├─ tsconfig.json
└─ tailwind.config.ts
```

## How to Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## How to Deploy on Vercel

1. Create a public GitHub repository.
2. Upload or push this project to the repository.
3. Go to Vercel and choose "Add New Project".
4. Import the GitHub repository.
5. Keep the default framework as Next.js.
6. Deploy the project.
7. Copy the Vercel production URL and add it to this README.

## Main AI Prompts Used

Prompt 1:

```text
Create Milestone 1 for a simple beginner-friendly web app.
Project idea: a sports picks recommendation app based on statistics.
Use Next.js App Router, TypeScript, and Tailwind CSS.
Create Home, Picks, About, layout, global styles, and one Navbar component.
Keep the code clean, minimal, and easy to modify.
```

Prompt 2:

```text
Add sample sports data using a local JSON file.
Create a sport selector so the user can filter matches by sport.
Display the filtered matches on the Picks page using reusable components.
```

Prompt 3:

```text
Add simple recommendation logic.
If Team A win rate is higher than Team B win rate, recommend Team A.
Otherwise recommend Team B.
If the win rates are very close, show that there is no strong pick.
```

Prompt 4:

```text
Create a README.md for a school project.
Include the tech stack, data flow, main AI prompts, deployment instructions,
and a short self-evaluation.
```

## Self-Evaluation

I learned how to structure a small Next.js application using the App Router and reusable React components. I also practiced using local JSON data, filtering state, and simple conditional logic to generate a recommendation.

The strongest part of the project is that it is simple and easy for a beginner to understand. The main limitation is that the sports data is static and does not come from a live API. In the future, the app could be improved with live sports data, odds comparison, charts, saved picks, and user accounts.

## Disclaimer

This project is for educational purposes only. It is not betting advice, financial advice, or a real prediction system.
