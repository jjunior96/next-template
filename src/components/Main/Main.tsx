import * as S from './styles';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => (
  <S.Container>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default Main;
