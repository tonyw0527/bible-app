import Head from "next/head";
import NotFoundComponent from "../components/common/NotFound";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <NotFoundComponent />
    </>
  );
}
