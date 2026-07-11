import { siteDescription, siteName } from './config';

const stack = [
  'Next.js App Router with static export (output: export)',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'ESLint + Prettier',
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-10 px-6 py-16">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {siteName}
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400">
          {siteDescription}
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Stack
        </h2>
        <ul className="flex flex-col gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm dark:border-neutral-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Edit <code className="font-mono">app/page.tsx</code> and update{' '}
        <code className="font-mono">app/config.ts</code> to start building.
      </p>
    </main>
  );
}
