import FsLightbox from "fslightbox-react";
import { useState } from "react";

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  return (
    <section class="ud-relative ud-z-10 ud-py-[120px]">
      <div class="ud-container">
        <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
          <div class="ud-w-full ud-px-4">
            <div
              class="
                ud-mx-auto ud-max-w-[570px] ud-text-center ud-mb-20
                wow
                fadeInUp
              "
              data-wow-delay=".1s"
            >
              <h2
                class="
                  ud-text-black
                  dark:ud-text-white
                  ud-font-bold ud-text-3xl
                  sm:ud-text-4xl
                  md:ud-text-[45px]
                  ud-mb-4
                "
              >
                We are ready to help
              </h2>
              <p
                class="
                  ud-text-body-color ud-text-base
                  md:ud-text-lg
                  ud-leading-relaxed
                  md:ud-leading-relaxed
                "
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
          <div class="ud-w-full ud-px-4">
            <div
              class="
                ud-mx-auto ud-max-w-[770px] ud-rounded-md ud-overflow-hidden
                wow
                fadeInUp
              "
              data-wow-delay=".15s"
            >
              <div class="ud-relative ud-items-center ud-justify-center">
                <img
                  src="images/video/video.jpg"
                  alt="video image"
                  class="ud-w-full ud-h-full ud-object-cover ud-object-center"
                />
                <div
                  class="
                    ud-absolute
                    ud-w-full
                    ud-h-full
                    ud-top-0
                    ud-right-0
                    ud-flex
                    ud-items-center
                    ud-justify-center
                  "
                >
                  <a
                    onClick={toggleVideo}
                    class="
                      glightbox
                      ud-w-[70px]
                      ud-h-[70px]
                      ud-rounded-full
                      ud-flex
                      ud-items-center
                      ud-justify-center
                      ud-bg-white
                      ud-bg-opacity-75
                      ud-text-primary
                      hover:ud-bg-opacity-100
                      ud-transition
                    "
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      class="ud-fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ud-absolute ud-bottom-0 ud-left-0 ud-right-0 ud-z-[-1]">
        {/* <img src="images/video/shape.svg" alt="shape" class="ud-w-full" /> */}
      </div>

      <FsLightbox
        toggler={toggleVideo}
        sources={["https://www.youtube.com/watch?v=ocwnns57cYQ&t=1s"]}
      />
    </section>
  );
};

export default Video;
