'use client';

import {useTranslations} from 'next-intl';

import {Link} from '@/infrastructure/libs/i18n/navigation';

export default function SchedulePage() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen bg-zinc-50 p-6 text-zinc-900">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold">Schedule</h1>
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link className="underline" href="/sign-in">Sign-in</Link>
            <Link className="underline" href="/dashboard">Dashboard</Link>
            <Link className="underline" href="/contacts">Contacts</Link>
            <Link className="underline" href="/schedule">Schedule</Link>
            <Link className="underline" href="/financy">Financy</Link>
            <Link className="underline" href="/users">Users</Link>
          </nav>
        </header>

        <section className="rounded-lg border bg-white p-6">
          <p className="text-sm text-zinc-600">{t('title')}</p>
        </section>
      </div>
    </main>
  );
}
