const d = document,
  w = window;

export default function video() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) => {
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.6 });

  $videos.forEach((el) => observer.observe(el));
}
