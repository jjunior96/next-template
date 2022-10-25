import Link from 'next/link';

import { Main } from 'components/Main/';

import * as S from './styles';

const Dashboard = () => {
  return (
    <Main>
      <S.Container>
        <h2>Test</h2>

        {/* Nao precisa mais da tag <a/> como children */}
        <Link href="/about">About</Link>
      </S.Container>
    </Main>
  );
};

export default Dashboard;
