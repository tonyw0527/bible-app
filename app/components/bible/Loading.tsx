import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2.5rem;

  width: 30rem;
  height: 30rem;
`;

function Loading() {
  const wrapperRef = useRef<HTMLDivElement>();

  useEffect(() => {
    // lottie 애니메이션 load
    lottie.loadAnimation({
      container: wrapperRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "bible-loading.json",
    });

    // lottie 애니메이션 play
    lottie.play();
  }, []);

  return <Wrapper ref={wrapperRef}></Wrapper>;
}

export default Loading;
