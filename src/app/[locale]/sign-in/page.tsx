'use client';

import {useTranslations} from 'next-intl';

import Header from '@/infrastructure/components/header/header.component';
import {Link} from '@/infrastructure/libs/i18n/navigation';

export default function SignInPage() {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen bg-zinc-50 p-6 text-zinc-900">
      <Header active="sign-in" />

      <div className="mx-auto mt-6 flex w-full max-w-4xl flex-col gap-6">

        <section className="rounded-lg border bg-white p-6">
          <p className="text-sm text-zinc-600">{t('title')}</p>
          <div className="mt-4">
            <Link
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
              href="/dashboard"
            >
              Entrar
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
