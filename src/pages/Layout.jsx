import PropTypes from "prop-types";
import { forwardRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

const Layout = forwardRef(({ children }, ref) => {
  return (
    <div className="app" ref={ref}>
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Layout;
