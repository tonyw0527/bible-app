import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

function Loading() {
  const wrapperRef = useRef<HTMLDivElement>();

  useEffect(() => {
    lottie.loadAnimation({
      container: wrapperRef.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "bible-loading.json", // the path to the animation json
    });

    lottie.play();

    return () => {};
  }, []);

  return <Wrapper ref={wrapperRef}></Wrapper>;
}

export default Loading;
