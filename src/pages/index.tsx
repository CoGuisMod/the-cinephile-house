import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Cinephile House</title>
        <meta
          name="description"
          content="Discover new movies and shows, makes lists, rate them and share your favorite films."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <h1>Working</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
