'use client';

import {useTranslations} from 'next-intl';

import Header from '@/infrastructure/components/header/header.component';

export default function FinancyPage() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen bg-zinc-50 p-6 text-zinc-900">
      <Header active="financy" />

      <div className="mx-auto mt-6 flex w-full max-w-4xl flex-col gap-6">

        <section className="rounded-lg border bg-white p-6">
          <p className="text-sm text-zinc-600">{t('title')}</p>
        </section>
      </div>
    </main>
  );
}
