const Contact = () => {
  return (
    <section id="contact" className="ud-pt-[120px] ud-pb-20">
      <div className="ud-container">
        <div className="ud-flex ud-flex-wrap ud-mx-[-16px]">
          <div className="ud-w-full  ud-px-4">
            <div
              className="
                                ud-bg-primary                
                ud-bg-opacity-20
                ud-rounded-md ud-p-11 ud-mb-12
                lg:ud-mb-5
                sm:ud-p-[55px]
                lg:ud-p-11
                xl:ud-p-[55px]
                wow
                fadeInUp
              "
              data-wow-delay=".15s
              "
            >
              <h2
                className="
                  ud-font-bold ud-text-black
                  dark:ud-text-white
                  ud-text-2xl
                  sm:ud-text-3xl
                  lg:ud-text-2xl
                  xl:ud-text-3xl
                  ud-mb-3
                "
              >
                Need Help? Open a Ticket
              </h2>
              <p className="ud-text-body-color ud-text-base ud-font-medium ud-mb-12">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="ud-flex ud-flex-wrap ud-mx-[-16px]">
                  <div className="ud-w-full md:ud-w-1/2 ud-px-4">
                    <div className="ud-mb-8">
                      <label
                        for="name"
                        className="
                          ud-block ud-text-sm ud-font-medium ud-text-dark
                          dark:ud-text-white
                          ud-mb-3
                        "
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="ud-w-full
                    ud-border
                    ud-border-body-color
                    ud-border-opacity-10
                    dark:ud-border-opacity-1
                    dark:ud-bg-[#121212]
                    ud-rounded-md
                    ud-py-3
                    ud-px-6
                    ud-font-medium
                    ud-text-body-color
                    ud-text-base
                    ud-placeholder-body-color
                    ud-outline-none
                    focus-visible:ud-shadow-none
                    focus:ud-border-primary focus:ud-border-opacity-100
                    ud-mb-4
                        "
                      />
                    </div>
                  </div>
                  <div className="ud-w-full md:ud-w-1/2 ud-px-4">
                    <div className="ud-mb-8">
                      <label
                        for="email"
                        className="
                          ud-block ud-text-sm ud-font-medium ud-text-dark
                          dark:ud-text-white
                          ud-mb-3
                        "
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="
                                              ud-w-full
                    ud-border
                    ud-border-body-color
                    ud-border-opacity-10
                    dark:ud-border-opacity-1
                    dark:ud-bg-[#121212]
                    ud-rounded-md
                    ud-py-3
                    ud-px-6
                    ud-font-medium
                    ud-text-body-color
                    ud-text-base
                    ud-placeholder-body-color
                    ud-outline-none
                    focus-visible:ud-shadow-none
                    focus:ud-border-primary focus:ud-border-opacity-100
                    ud-mb-4
                        "
                      />
                    </div>
                  </div>
                  <div className="ud-w-full ud-px-4">
                    <div className="ud-mb-8">
                      <label
                        for="message"
                        className="
                          ud-block ud-text-sm ud-font-medium ud-text-dark
                          dark:ud-text-white
                          ud-mb-3
                        "
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Enter your Message"
                        className="
                                             ud-w-full
                    ud-border
                    ud-border-body-color
                    ud-border-opacity-10
                    dark:ud-border-opacity-1
                    dark:ud-bg-[#121212]
                    ud-rounded-md
                    ud-py-3
                    ud-px-6
                    ud-font-medium
                    ud-text-body-color
                    ud-text-base
                    ud-placeholder-body-color
                    ud-outline-none
                    focus-visible:ud-shadow-none
                    focus:ud-border-primary focus:ud-border-opacity-100
                    ud-mb-4
                        "
                      ></textarea>
                    </div>
                  </div>
                  <div className="ud-w-full ud-px-4">
                    <a
                      href="javascript:void(0)"
                      className="
                        ud-text-base
                        ud-font-medium
                        ud-text-white
                        ud-bg-primary
                        ud-py-4
                        ud-px-9
                        hover:ud-bg-opacity-80 hover:ud-shadow-signUp
                        ud-rounded-md
                        ud-transition
                        ud-duration-300
                        ud-ease-in-out
                      "
                    >
                      Submit Ticket
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
