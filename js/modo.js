document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const body = document.body;
    const nav = document.querySelector('.custom-nav-color');
    const modoClaroBtn = document.getElementById('modo-claro');
    const modoOscuroBtn = document.getElementById('modo-oscuro');

    function setModoClaro() {
        root.style.setProperty('--azul', '#2260c5');
        root.style.setProperty('--azul-oscuro', '#1a407e');
        body.style.backgroundColor = 'var(--azul-oscuro)';
        if (nav) nav.style.backgroundColor = 'var(--azul)';
        body.classList.remove('modo-oscuro');
    }

    function setModoOscuro() {
        root.style.setProperty('--azul', '#222c36');
        root.style.setProperty('--azul-oscuro', '#11151a');
        body.style.backgroundColor = 'var(--azul-oscuro)';
        if (nav) nav.style.backgroundColor = 'var(--azul)';
        body.classList.add('modo-oscuro');
    }

    modoClaroBtn?.addEventListener('click', setModoClaro);
    modoOscuroBtn?.addEventListener('click', setModoOscuro);

    // Por defecto, modo claro
    setModoClaro();
});
