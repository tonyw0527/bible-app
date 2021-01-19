import Head from "next/head";
import HomeComponent from "../components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>성경 앱 홈</title>
      </Head>
      <HomeComponent />
    </>
  );
}
