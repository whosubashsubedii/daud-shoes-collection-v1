
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeaderShrink() {
    const header = document.querySelector("header");
    if (lastScrollY >= 1) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderShrink);
      ticking = true;
    }
  });
