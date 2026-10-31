// Smooth anchor navigation and a small scroll reveal effect.
const revealItems = document.querySelectorAll('.project-card, .project-featured, .skills-section, .intro-strip');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}
