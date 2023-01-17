import Link from 'next/link';

import { Main } from 'components/Main/';

import * as S from './styles';

const Dashboard = () => {
  return (
    <Main>
      <S.Container>
        <Link href="/about">Link: About</Link>
      </S.Container>
    </Main>
  );
};

export default Dashboard;
