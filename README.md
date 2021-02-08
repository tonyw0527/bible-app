# Bible App

- 성경을 웹에서 쉽게 읽을 수 있도록 제작한 웹앱입니다. [성경 앱 바로가기](https://bible-app-git-main.tonyw0527.vercel.app/) (초대코드: bible)
- 모바일과 데스크탑 모두 쉽게 읽을 수 있도록 CSS flex 속성을 이용해 반응형 레이아웃을 지원합니다.
- 다크모드를 지원합니다.

## Tech Stack

- Typescript
- Next.js
- Mobx
- Styled-components
- Mongoose

## Pages

### index

- 첫 화면입니다.
- 헤더 부분에 단순한 auth 기능을 넣었습니다. 인증을 위해 next.js의 api routes를 이용하였습니다.
- state 관리로 mobx를 사용했습니다.
- 처음 방문했을 때와 초대코드가 틀렸을 경우에 대해 알림 Pop up을 띄워줍니다.
- 편리하게 pop up을 컨트롤하기 위해 custom hook인 usePopUp을 작성하여 이용하였습니다.

### bible

- 성경 읽기 페이지입니다.
- state 관리로 mobx를 사용했습니다.
- Mongodb Atlas 서버에서 데이터를 가져오기 위해 next.js의 api routes를 이용하였습니다.
- lottie-web 라이브러리를 이용해 DB 요청시 로딩 애니매이션 기능을 구현하였습니다.

### quick-search

- 조건에 맞는 성경 본문 검색을 도와주는 페이지 입니다.
- state 관리로 mobx를 사용했습니다.

### pray-card

- 기도 카드를 만드는 페이지입니다.
- context api와 useReducer를 이용하여 Maker 컴포넌트와 Card 컴포넌트를 이어주는 state 관리를 하였습니다.
- html2canvas 라이브러리를 이용해 카드 저장 기능을 구현하였습니다.

### 404

- 404 에러 페이지입니다.

## Info

- next.js를 사용하였지만 아직 Server-side rendering 구현이 미흡합니다.
