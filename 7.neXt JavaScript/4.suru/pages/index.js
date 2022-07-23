import Head from "next/head";
import Image from "next/image";
import Container1 from "../components/container/1stContainer";
import Container2 from "../components/container/2ndContainer";
import Services from "../components/container/Services";
import { data } from "../data";
import styles from "../styles/Home.module.css";

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SURU | Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="SURU | THE BEGINNING " />
        <link rel="icon" href="/static/logos/SL.png" />
      </Head>

      <Container1 />
      <Services services={services} />
      <Container2 />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
