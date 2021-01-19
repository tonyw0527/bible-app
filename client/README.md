# Tony West's Create Next App Boiler Plate

## Features

- Dark Mode

## Libraries

- typescript
- styled-components
- styled-normalize

## API Refernce

### Pre Rendering

#### Static Rendering

- rendering in build time.

```javascript
export async function getStaticPaths() {
  return {
    paths: [
      { params: { dynamic: 1} },
      { params: { dynamic: 2} },
      ...
    ],
    fallback: true,
  }
}
```

```javascript
export async function getStaticProps() {
  // logic
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

### Servier-Side Rendering

- rendering in request time from server-side.

```javascript
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

### Client-Side Rendering

- rendering in request time from client-side.

```javascript
import useSWR from "swr";

function Profile() {
  const { data, error } = useSWR("/api/user", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```
