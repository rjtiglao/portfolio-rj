/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "./SliderContent";

/**
 * @function Slider
 */
const Slider = props => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  });

  const { translate, transition } = state;
  console.log("test");
  console.log(props);

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {/* */}
      </SliderContent>
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
export default Slider;
