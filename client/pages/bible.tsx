import Head from "next/head";
import BibleComponent from "../components/bible";

export default function Bible() {
  return (
    <>
      <Head>
        <title>성경 읽기</title>
      </Head>
      <BibleComponent />
    </>
  );
}
