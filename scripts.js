function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const adjustStyles = () => {
      const width = window.innerWidth;

      const customerSection = document.querySelector('.what-customer');
      if (width < 768) {
          customerSection.style.flexDirection = 'column';
      } else {
          customerSection.style.flexDirection = 'row';
      }
  };

  // Run on load and resize
  adjustStyles();
  window.addEventListener('resize', adjustStyles);
});
