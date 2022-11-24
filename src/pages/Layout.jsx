import PropTypes from "prop-types";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {children}
        <Footer />
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
