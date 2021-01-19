import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 200px;
`;

const ProfileLink = ({ profile }) => (
  <div>
    <Link href={`/profile/[profile]`} as={`/profile/${profile}`}>
      <a>Go to {profile}'s profile</a>
    </Link>
  </div>
);

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Next App</title>
      </Head>
      <h1>Friends List</h1>
      <ProfileLink profile="tony" />
      <ProfileLink profile="peter" />
      <ProfileLink profile="crystal" />
    </Container>
  );
}
