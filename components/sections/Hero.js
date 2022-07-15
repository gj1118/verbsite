const Hero = () => {
  return (
    <section
      id="home"
      className="
        ud-relative ud-z-10 ud-pt-[120px] ud-pb-[110px]
        md:ud-pt-[150px] md:ud-pb-[120px]
        xl:ud-pt-[180px] xl:ud-pb-[160px]
        2xl:ud-pt-[210px] 2xl:ud-pb-[200px]
      "
    >
      <div className="ud-container">
        <div className="ud-flex ud-flex-wrap ud-mx-[-16px]">
          <div className="ud-w-full ud-px-4">
            <div
              className="ud-mx-auto ud-max-w-[570px] ud-text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h1
                className="
                  ud-text-black
                  dark:ud-text-white
                  ud-font-bold ud-text-3xl
                  sm:ud-text-4xl
                  md:ud-text-5xl
                  ud-leading-tight
                  sm:ud-leading-tight
                  md:ud-leading-tight
                  ud-mb-5
                "
              >
                Next.js scaffold for modern apps
              </h1>
              <p
                className="
                  ud-font-medium ud-text-lg
                  md:ud-text-xl
                  ud-leading-relaxed
                  md:ud-leading-relaxed
                  ud-text-body-color
                  dark:ud-text-white dark:ud-opacity-90
                  ud-mb-12
                "
              >
                Verb is an awesome Next.js scaffold for building the next
                generation of apps. It comes prebuilt with everything you need!
              </p>
              <div class="ud-flex ud-items-center ud-justify-center ud-z-[-1]">
                <a
                  href="#pricing"
                  class="
                    ud-text-base
                    ud-font-semibold
                    ud-text-white
                    ud-bg-primary
                    ud-py-4
                    ud-px-8
                    hover:ud-bg-opacity-80
                    ud-mx-2
                    ud-rounded-md
                    ud-transition
                    ud-duration-300
                    ud-ease-in-out
                  "
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
