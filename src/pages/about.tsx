import Link from 'next/link';

import { Main } from 'components/Main';

export default function AboutPage() {
  return (
    <Main>
      <h2>About Page</h2>

      <Link href="/">Dashboard</Link>
    </Main>
  );
}
