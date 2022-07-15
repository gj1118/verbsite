import {
  Info,
  StripeLogo,
  SunDim,
  Upload,
  UserCircleGear,
  Users,
} from "phosphor-react";

const Features = () => {
  return (
    <section
      id="features"
      className="ud-bg-primary ud-bg-opacity-[3%] ud-pt-[120px] ud-pb-[50px]"
    >
      <div className="ud-container">
        <div className="ud-flex ud-flex-wrap ud-mx-[-16px]">
          <div className="ud-w-full ud-px-4">
            <div
              className="
                ud-mx-auto ud-max-w-[570px] ud-text-center ud-mb-[100px]
                wow
                fadeInUp
              "
              data-wow-delay=".1s"
            >
              <h2
                className="
                  ud-text-black
                  dark:ud-text-white
                  ud-font-bold ud-text-3xl
                  sm:ud-text-4xl
                  md:ud-text-[45px]
                  ud-mb-4
                "
              >
                Features
              </h2>
              <p
                className="
                  ud-text-body-color ud-text-base
                  md:ud-text-lg
                  ud-leading-relaxed
                  md:ud-leading-relaxed
                "
              >
                Build fully functional accessible web applications faster than
                ever with — Verb includes all the components and hooks to cover
                you in any situation
              </p>
            </div>
          </div>
        </div>

        <div className="ud-flex ud-flex-wrap ud-mx-[-16px]">
          <div className="ud-w-full md:ud-w-1/2 lg:ud-w-1/3 ud-px-4">
            <div className="ud-mb-[70px] wow fadeInUp" data-wow-delay=".15s">
              <div
                className="
                  ud-w-[70px]
                  ud-h-[70px]
                  ud-flex
                  ud-items-center
                  ud-justify-center
                  ud-rounded-md
                  ud-bg-primary
                  ud-bg-opacity-10
                  ud-mb-10
                  ud-text-primary
                "
              >
                <UserCircleGear weight="regular" color={"#9ca3af"} size={48} />
              </div>
              <h3
                className="
                  ud-font-bold ud-text-black
                  dark:ud-text-white
                  ud-text-xl
                  sm:ud-text-2xl
                  lg:ud-text-xl
                  xl:ud-text-2xl
                  ud-mb-5
                "
              >
                Authentication
              </h3>
              <p
                className="
                  ud-text-body-color
                  ud-text-base
                  ud-leading-relaxed
                  ud-font-medium
                  ud-pr-[10px]
                "
              >
                Tuae nam ex similique incidunt expedita exerci tationem
                laudantium. Repellendus quisquam numquam perferendis earum
                sapiente non tempore? Fugit repellat ut maiores.
              </p>
            </div>
          </div>
          <div className="ud-w-full md:ud-w-1/2 lg:ud-w-1/3 ud-px-4">
            <div className="ud-mb-[70px] wow fadeInUp" data-wow-delay=".2s">
              <div
                className="
                  ud-w-[70px]
                  ud-h-[70px]
                  ud-flex
                  ud-items-center
                  ud-justify-center
                  ud-rounded-md
                  ud-bg-primary
                  ud-bg-opacity-10
                  ud-mb-10
                  ud-text-primary
                "
              >
                <StripeLogo weight="regular" color={"#9ca3af"} size={48} />
              </div>
              <h3
                className="
                  ud-font-bold ud-text-black
                  dark:ud-text-white
                  ud-text-xl
                  sm:ud-text-2xl
                  lg:ud-text-xl
                  xl:ud-text-2xl
                  ud-mb-5
                "
              >
                Stripe
              </h3>
              <p
                className="
                  ud-text-body-color
                  ud-text-base
                  ud-leading-relaxed
                  ud-font-medium
                  ud-pr-[10px]
                "
              >
                Tuae nam ex similique incidunt expedita exerci tationem
                laudantium. Repellendus quisquam numquam perferendis earum
                sapiente non tempore? Fugit repellat ut maiores.
              </p>
            </div>
          </div>
          <div className="ud-w-full md:ud-w-1/2 lg:ud-w-1/3 ud-px-4">
            <div className="ud-mb-[70px] wow fadeInUp" data-wow-delay=".25s">
              <div
                className="
                  ud-w-[70px]
                  ud-h-[70px]
                  ud-flex
                  ud-items-center
                  ud-justify-center
                  ud-rounded-md
                  ud-bg-primary
                  ud-bg-opacity-10
                  ud-mb-10
                  ud-text-primary
                "
              >
                <Users weight="regular" color={"#9ca3af"} size={48} />
              </div>
              <h3
                className="
                  ud-font-bold ud-text-black
                  dark:ud-text-white
                  ud-text-xl
                  sm:ud-text-2xl
                  lg:ud-text-xl
                  xl:ud-text-2xl
                  ud-mb-5
                "
              >
                Users, Roles and Teams
              </h3>
              <p
                className="
                  ud-text-body-color
                  ud-text-base
                  ud-leading-relaxed
                  ud-font-medium
                  ud-pr-[10px]
                "
              >
                Tuae nam ex similique incidunt expedita exerci tationem
                laudantium. Repellendus quisquam numquam perferendis earum
                sapiente non tempore? Fugit repellat ut maiores.
              </p>
            </div>
          </div>
          <div className="ud-w-full md:ud-w-1/2 lg:ud-w-1/3 ud-px-4">
            <div className="ud-mb-[70px] wow fadeInUp" data-wow-delay=".1s">
              <div
                className="
                  ud-w-[70px]
                  ud-h-[70px]
                  ud-flex
                  ud-items-center
                  ud-justify-center
                  ud-rounded-md
                  ud-bg-primary
                  ud-bg-opacity-10
                  ud-mb-10
                  ud-text-primary
                "
              >
                <SunDim weight="regular" color={"#9ca3af"} size={48} />
              </div>
              <h3
                className="
                  ud-font-bold ud-text-black
                  dark:ud-text-white
                  ud-text-xl
                  sm:ud-text-2xl
                  lg:ud-text-xl
                  xl:ud-text-2xl
                  ud-mb-5
                "
              >
                Gorgeous Dark Mode
              </h3>
              <p
                className="
                  ud-text-body-color
                  ud-text-base
                  ud-leading-relaxed
                  ud-font-medium
                  ud-pr-[10px]
                "
              >
                Tuae nam ex similique incidunt expedita exerci tationem
                laudantium. Repellendus quisquam numquam perferendis earum
                sapiente non tempore? Fugit repellat ut maiores.
              </p>
            </div>
          </div>
          <div className="ud-w-full md:ud-w-1/2 lg:ud-w-1/3 ud-px-4">
            <div className="ud-mb-[70px] wow fadeInUp" data-wow-delay=".15s">
              <div
                className="
                  ud-w-[70px]
                  ud-h-[70px]
                  ud-flex
                  ud-items-center
                  ud-justify-center
                  ud-rounded-md
                  ud-bg-primary
                  ud-bg-opacity-10
                  ud-mb-10
                  ud-text-primary
                "
              >
                <Upload weight="regular" color={"#9ca3af"} size={48} />
              </div>
              <h3
                className="
                  ud-font-bold ud-text-black
                  dark:ud-text-white
                  ud-text-xl
                  sm:ud-text-2xl
                  lg:ud-text-xl
                  xl:ud-text-2xl
                  ud-mb-5
                "
              >
                File Uploads
              </h3>
              <p
                className="
                  ud-text-body-color
                  ud-text-base
                  ud-leading-relaxed
                  ud-font-medium
                  ud-pr-[10px]
                "
              >
                Tuae nam ex similique incidunt expedita exerci tationem
                laudantium. Repellendus quisquam numquam perferendis earum
                sapiente non tempore? Fugit repellat ut maiores.
              </p>
            </div>
          </div>
          <div className="ud-w-full md:ud-w-1/2 lg:ud-w-1/3 ud-px-4">
            <div className="ud-mb-[70px] wow fadeInUp" data-wow-delay=".2s">
              <div
                className="
                  ud-w-[70px]
                  ud-h-[70px]
                  ud-flex
                  ud-items-center
                  ud-justify-center
                  ud-rounded-md
                  ud-bg-primary
                  ud-bg-opacity-10
                  ud-mb-10
                  ud-text-primary
                "
              >
                <Info weight="regular" color={"#9ca3af"} size={48} />
              </div>
              <h3
                className="
                  ud-font-bold ud-text-black
                  dark:ud-text-white
                  ud-text-xl
                  sm:ud-text-2xl
                  lg:ud-text-xl
                  xl:ud-text-2xl
                  ud-mb-5
                "
              >
                Help
              </h3>
              <p
                className="
                  ud-text-body-color
                  ud-text-base
                  ud-leading-relaxed
                  ud-font-medium
                  ud-pr-[10px]
                "
              >
                Tuae nam ex similique incidunt expedita exerci tationem
                laudantium. Repellendus quisquam numquam perferendis earum
                sapiente non tempore? Fugit repellat ut maiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
