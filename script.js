    // Micro-interacciones y Lógica
        const themeBtn = document.getElementById('theme-btn');
        const html = document.documentElement;
        const menuBtn = document.getElementById('menu-btn');
        const sidebar = document.getElementById('sidebar');

        // Toggle Tema
        themeBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            themeBtn.textContent = newTheme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
        });

        // Toggle Menú Hamburguesa
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Cerrar sidebar al hacer click fuera (UX básico)
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });