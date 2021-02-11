import Image from 'next/image';

import { Container, Content } from './styles';

const Main = ({ title = 'App Name' }) => (
  <Container>
    <Content>
      <h1>{title}</h1>
      <Image
        src="/assets/vercel.svg"
        width={100}
        height={100}
        alt="Logo da Vercel, empresa criadora do Next"
      />
    </Content>
  </Container>
);

export default Main;
