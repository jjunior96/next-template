import Image from 'next/image';

// import { Container } from './styles';

const Main = ({ title = 'App Name' }) => (
  <main>
    <h1>{title}</h1>
    <Image src="/assets/vercel.svg" width={100} height={100} />
  </main>
);

export default Main;
