import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import sleep from "@/utils/sleep";

function Layout({ children }) {
  const [circlePercentage, setCirclePercentage] = useState("0");
  const [percentage, setPercentage] = useState("0");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      // 確保動畫順利，重新整理網頁回到頂端
      window.scrollTo({
        top: 0,
        left: 0,
      });
      await sleep(500);
      setPercentage("100%");
      await sleep(500);
      setCirclePercentage("100%");
      await sleep(500);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {circlePercentage !== "100%" &&
        createPortal(<Loading percentage={percentage} />, document.body)}
      <div
        className={clsx(
          "duration-500",
          isLoading && "h-screen overflow-hidden"
        )}
        style={{
          clipPath: `circle(${circlePercentage})`,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

Layout.displayName = "Layout";
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Layout;
