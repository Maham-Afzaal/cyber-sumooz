import Head from "next/head";
import Detail from "../components/Detail/Detail";
import Header from "../components/Header/Header";
import { Container } from "@mui/material";
import Intro from "../components/Intro/Intro";
import CollectionSumos from "../components/CollectionSumos/CollectionSumos";
import Character from "../components/character/Character";
import RoadMap from "../components/RoadMap/RoadMap";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cyber Sumo</title>
        <meta name="description" content="Cyber Sumooz Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <Container>
          <Detail />
          <Intro />
        </Container>
        <CollectionSumos />
        <Container>
          <Character />
          <RoadMap />
          <Team />
          <FAQ />
        </Container>
        <Footer />
    </div>
  );
}
