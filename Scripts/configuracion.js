
  
  const translation = {
    es: {
        title: "Ajustes", darkModeLabel: "Modo Noche"
    },
    en: {
        title: "Settings",
        darkModeLabel: "dark mode"
    }
  };

  document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.ariaValueMax;
    document.querySelectorAll('[data-tranlate]').forEach(elemnt => {
        const key = element.getAttribute('data-translate');
        element.textcontent = translations[selectedLanguage][key];
    })
  })
  
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      document.getElementById('darkModeToggle').checked = true; 
  }

 
  document.getElementById('darkModeToggle').addEventListener('change', function() {
      if (this.checked) {
          document.body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled'); 
      } else {
          document.body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', 'disabled'); 
      }
  });
});
