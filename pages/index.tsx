import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Table from "../components/Table";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard</title>
        <meta
          name="description"
          content="Example leaderboard built with Next.js and TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Who's the best?</h1>

        <p className={styles.description}>
          Let's find out. Enter an Event Name and see how every player ranks.
        </p>

        <div className={styles.grid}>
          <Table />
        </div>
      </main>

      <footer className={styles.footer}>
        <span>footer</span>
      </footer>
    </div>
  );
};

export default Home;
