import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    //===== close navbar-collapse when a  clicked
    document
      .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
      .forEach((e) =>
        e.addEventListener("click", () => {
          navbarToggler.classList.remove("navbarTogglerActive");
          navbarCollapse.classList.add("ud-hidden");
        })
      );
  });
  const toggleNavbar = () => {
    let navbarToggler = document.querySelector("#navbarToggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("ud-hidden");
  };
  return (
    <header
      className="
        header
        ud-bg-transparent
        ud-absolute
        ud-top-0
        ud-left-0
        ud-z-40
        ud-w-full
        ud-flex
        ud-items-center
      "
    >
      <div className="ud-container">
        <div
          className="
            ud-flex ud-mx-[-16px] ud-items-center ud-justify-center ud-relative
          "
        >
          <div className="ud-px-4 ud-w-60 ud-max-w-full">
            <a className="ud-w-full ud-block ud-py-8 header-logo" href="#home">
              <img
                src="images/logo/verb.svg"
                alt="logo"
                className="ud-w-full dark:ud-hidden"
              />
              <img
                src="images/logo/verb.svg"
                alt="logo"
                style={{ width: "40px" }}
                className="ud-w-full ud-hidden dark:ud-block"
              />
            </a>
          </div>
          <div className="ud-flex ud-px-4 ud-justify-center ud-items-center ud-w-full">
            <div>
              <button
                id="navbarToggler"
                aria-label="Mobile Menu"
                onClick={toggleNavbar}
                className="
                  ud-block
                  ud-absolute
                  ud-right-4
                  ud-top-1/2
                  ud-translate-y-[-50%]
                  lg:ud-hidden
                  focus:ud-ring-2
                  ud-ring-primary ud-px-3 ud-py-[6px] ud-rounded-lg
                "
              >
                <span
                  className="
                    ud-relative
                    ud-w-[30px]
                    ud-h-[2px]
                    ud-my-[6px]
                    ud-block
                    ud-bg-dark
                    dark:ud-bg-white
                  "
                ></span>
                <span
                  className="
                    ud-relative
                    ud-w-[30px]
                    ud-h-[2px]
                    ud-my-[6px]
                    ud-block
                    ud-bg-dark
                    dark:ud-bg-white
                  "
                ></span>
                <span
                  className="
                    ud-relative
                    ud-w-[30px]
                    ud-h-[2px]
                    ud-my-[6px]
                    ud-block
                    ud-bg-dark
                    dark:ud-bg-white
                  "
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className="
                  ud-absolute ud-py-5
                  lg:ud-py-0 lg:ud-px-4
                  xl:ud-px-6
                  ud-bg-white
                  dark:ud-bg-dark
                  lg:dark:ud-bg-transparent lg:ud-bg-transparent
                  ud-shadow-lg ud-rounded-lg ud-max-w-[250px] ud-w-full
                  lg:ud-max-w-full lg:ud-w-full
                  ud-right-4 ud-top-full ud-hidden
                  lg:ud-block lg:ud-static lg:ud-shadow-none
                "
              >
                <ul className="ud-blcok lg:ud-flex">
                  <li className="ud-relative ud-group">
                    <a
                      href="#home"
                      className="
                        menu-scroll
                        ud-text-base
                        text-dark
                        dark:ud-text-white
                        group-hover:ud-opacity-70
                        ud-py-2
                        lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                        ud-flex ud-mx-8
                        lg:ud-mr-0
                      "
                    >
                      Home
                    </a>
                  </li>
                  <li className="ud-relative ud-group">
                    <a
                      href="#about"
                      className="
                        menu-scroll
                        ud-text-base
                        text-dark
                        dark:ud-text-white
                        group-hover:ud-opacity-70
                        ud-py-2
                        lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                        ud-flex ud-mx-8
                        lg:ud-mr-0 lg:ud-ml-8
                        xl:ud-ml-12
                      "
                    >
                      About
                    </a>
                  </li>
                  <li className="ud-relative ud-group">
                    <a
                      href="#pricing"
                      className="
                        menu-scroll
                        ud-text-base
                        text-dark
                        dark:ud-text-white
                        group-hover:ud-opacity-70
                        ud-py-2
                        lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                        ud-flex ud-mx-8
                        lg:ud-mr-0 lg:ud-ml-8
                        xl:ud-ml-12
                      "
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="ud-relative ud-group">
                    <a
                      href="#faqs"
                      className="
                        menu-scroll
                        ud-text-base
                        text-dark
                        dark:ud-text-white
                        group-hover:ud-opacity-70
                        ud-py-2
                        lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                        ud-flex ud-mx-8
                        lg:ud-mr-0 lg:ud-ml-8
                        xl:ud-ml-12
                      "
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="ud-relative ud-group">
                    <a
                      href="#contact"
                      className="
                        menu-scroll
                        ud-text-base
                        text-dark
                        dark:ud-text-white
                        group-hover:ud-opacity-70
                        ud-py-2
                        lg:ud-py-6 lg:ud-inline-flex lg:ud-px-0
                        ud-flex ud-mx-8
                        lg:ud-mr-0 lg:ud-ml-8
                        xl:ud-ml-12
                      "
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
