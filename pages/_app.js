import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const initWow = async () => {
      const WOW = await import("wow.js");
      new WOW.default().init();
    };
    initWow();

    window.addEventListener("scroll", () => {
      const ud_header = document.querySelector(".header");
      const sticky = ud_header.offsetTop;

      if (window.pageYOffset > sticky) {
        ud_header.classList.add("sticky");
      } else {
        ud_header.classList.remove("sticky");
      }

      // show or hide the back-top-top button
      const backToTop = document.querySelector(".back-to-top");
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
