import React, { useEffect, useState } from "react";

// styled component
import { Layout } from "./ScrollTop.styled";

// component

import { Row } from "components/Layout";

// icons
import { IoIosArrowUp } from "react-icons/io";

// -----------------------------------------------------------

const ScrollTop: React.FC = () => {
  const [enable, setEnable] = useState(false);
  let timeout: any;
  const handleOnScroll = (isMounted: any) => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      isMounted && setEnable(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isMounted && setEnable(false);
      }, 2000);
    } else {
      isMounted && setEnable(false);
    }
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      window.addEventListener("scroll", () => handleOnScroll(isMounted));
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", () => {
        return;
      });
    };
  });
  return (
    <React.Fragment>
      <Layout onClick={scrollToTop} showButton={enable}>
        <Row
          alignItems="center"
          justifyContent="center"
          gap={-3}
          flexDirection="column"
        >
          <IoIosArrowUp size={20} />
          <p>Top</p>
        </Row>
      </Layout>
    </React.Fragment>
  );
};

export default ScrollTop;
