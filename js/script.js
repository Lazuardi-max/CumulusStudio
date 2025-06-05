   // Fungsi toggle tema
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    document.addEventListener('DOMContentLoaded', function() {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
      }
    });

    if(document.body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }

    // Cek preferensi tema saat halaman dimuat
    window.onload = function() {
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'dark') {
            document.body.classList.add('dark-mode');
        }
      applyTheme();
    };

    // Cek preferensi dari localStorage
    const userTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Terapkan tema berdasarkan preferensi
    if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
      document.body.classList.add('dark-mode');
    }

 