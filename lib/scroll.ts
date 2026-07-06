function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

export function getScrollOffset() {
  if (typeof window === "undefined") {
    return 112;
  }

  const styles = getComputedStyle(document.documentElement);
  const headerHeight = Number.parseFloat(styles.getPropertyValue("--header-height")) || 64;
  const navHeight =
    Number.parseFloat(styles.getPropertyValue("--home-section-nav-height")) || 48;

  return headerHeight + navHeight;
}

export function scrollToSection(
  id: string,
  duration = 300,
  onComplete?: () => void,
) {
  const element = document.getElementById(id);
  if (!element) return;

  const targetY = element.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onComplete?.();
    }
  }

  requestAnimationFrame(step);
}
