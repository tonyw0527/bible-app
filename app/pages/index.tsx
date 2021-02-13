import Head from "next/head";
import Home from "../components/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>성경 앱 홈</title>
      </Head>
      <Home />
    </>
  );
}
