import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,
    body {
        font-family: "Nanum Gothic", sans-serif;
        background: ${({ theme }) => theme.color.body};
        color: ${({ theme }) => theme.color.text};
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
      font-family: "yg-jalnan";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "NanumBarunGothic";
      font-style: normal;
      font-weight: 400;
      src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot");
      src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix")
          format("embedded-opentype"),
        url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff")
          format("woff"),
        url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf")
          format("truetype");
    }
    
    @font-face {
      font-family: "NanumBarunGothic";
      font-style: normal;
      font-weight: 700;
      src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot");
      src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix")
          format("embedded-opentype"),
        url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff")
          format("woff"),
        url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf")
          format("truetype");
    }
    
    @font-face {
      font-family: "NanumBarunGothic";
      font-style: normal;
      font-weight: 300;
      src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot");
      src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix")
          format("embedded-opentype"),
        url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff")
          format("woff"),
        url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf")
          format("truetype");
    }
    
    .nanumbarungothic * {
      font-family: "NanumBarunGothic", sans-serif;
    }
`;