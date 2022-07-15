export default function BackToTop() {
  const scrollTo = (element, to = 0, duration = 500) => {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <a
      onClick={() => scrollTo(document.documentElement)}
      className="
        ud-hidden
        ud-items-center
        ud-justify-center
        ud-bg-orange-600
        ud-text-slate-800
        ud-w-10
        ud-h-10
        ud-rounded-md
        ud-fixed
        ud-bottom-8
        ud-right-8
        ud-left-auto
        ud-z-[999]
        hover:ud-shadow-signUp hover:ud-bg-opacity-80
        ud-transition ud-duration-300 ud-ease-in-out
        back-to-top
        ud-shadow-md
      "
    >
      <span
        className="
          ud-w-3
          ud-h-3
          ud-border-t
          ud-border-l
          ud-border-white
          ud-rotate-45
          ud-mt-[6px]
        "
      ></span>
    </a>
  );
}
