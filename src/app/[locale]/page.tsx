import {redirect} from 'next/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home(props: Props) {
  const { locale } = await props.params;
  redirect(`/${locale}/sign-in`);
}
