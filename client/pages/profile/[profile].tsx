import Head from "next/head";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { profile } = router.query;

  return (
    <>
      <Head>
        <title>{profile}'s profile</title>
      </Head>

      <p>Hello, my name is {profile}. I use next.js</p>
    </>
  );
}
