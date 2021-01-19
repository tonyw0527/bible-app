export async function getStaticProps() {
  return {
    props: {
      word: "hello",
    },
  };
}

export default function About({ word }) {
  return <div>{word} This is About Page</div>;
}
