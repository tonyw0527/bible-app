import Head from "next/head";
import PrayCardComponent from "../components/pray-card";

export default function PrayCard() {
  return (
    <>
      <Head>
        <title>기도 카드</title>
      </Head>
      <PrayCardComponent />
    </>
  );
}
