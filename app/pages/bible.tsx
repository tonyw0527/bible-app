import Head from "next/head";
import BibleComponent from "../components/bible";
import { useRouter } from "next/router";
import { useStore } from "../stores/StoreProvider";

export default function Bible() {
  const router = useRouter();
  const store = useStore();

  if (!store.userStore.isAuth) {
    alert("초대코드를 입력하세요");
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>성경 읽기</title>
      </Head>
      <BibleComponent />
    </>
  );
}
