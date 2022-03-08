import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { Button } from "@chakra-ui/react";
import Head from "next/head";

interface ContinentProps {
  continent: {
    slug: string;
  };
}

export default function Continent({ continent }: ContinentProps) {
  const { slug } = continent;

  return (
    <>
      <Head>
        <title>{slug} | World Trip</title>
      </Head>
      <Header showBackButton />
      <h1>{slug}</h1>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      "/continent/asia",
      "/continent/europe",
      "/continent/north-america",
      "/continent/south-america",
      "/continent/oceania",
    ],
    fallback: "blocking",
    // true: Quando usuario acessa o post pela primeira vez, faz a requisicao em tempo real. Mas espera a página carregar para mostrar para o usuario. (Causa Layout Shift-carrega a página sem o conteúdo e depois preenche ele) | Não é bom para SEO.

    // false: Se o post não foi gerado ainda, manda o erro de 404.

    // 'blocking': Parece o true, mas carrega o post no serverSide e só mostra a tela depois que carregou o conteúdo de fato.
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continent = {
    slug,
  };

  return {
    props: {
      continent,
    },
    // redirect: 60 * 60, // 1 hour
  };
};
