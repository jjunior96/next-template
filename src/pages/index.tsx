import Head from "next/head";

type Props = {
  title: string;
};

export default function Home({ title = "React Avançado" }: Props) {
  return <h1>{title}</h1>;
}
