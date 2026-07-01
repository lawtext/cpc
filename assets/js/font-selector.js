document.addEventListener('DOMContentLoaded', function() {
  const fontOptions = document.querySelectorAll('.font-option');

  fontOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const fontKey = this.getAttribute('data-font');
      const fontVar = `--font-serif-${fontKey}`;

      // Update the active CSS variable
      document.documentElement.style.setProperty('--font-serif-active', `var(${fontVar})`);

      // Update active state on dropdown items
      fontOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Set initial active state (fangsong is default)
  const defaultOption = document.querySelector('[data-font="fangsong"]');
  if (defaultOption) {
    defaultOption.classList.add('active');
  }
});
