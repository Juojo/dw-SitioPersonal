document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores
    const nombre = document.getElementById('nombre-form').value.trim();
    const email = document.getElementById('email-form').value.trim();
    const emailCofirmado = document.getElementById('email-confirmado-form').value.trim();
    const asunto = document.getElementById('asunto-form').value.trim();
    const mensaje = document.getElementById('mensaje-form').value.trim();

    const mensajeValidacion = document.getElementById('mensaje-validacion');

    // Reset de mensajes
    mensajeValidacion.textContent = '';
    mensajeValidacion.className = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Se usa para validar que todos los caracteres necesarios esten presentes

    // Validaciones
    if (nombre === '' || email === '' || emailCofirmado === '' || asunto === '' || mensaje === '') {
        mensajeValidacion.textContent = 'Por favor completá todos los campos.';
        mensajeValidacion.className = 'alert alert-danger';
        return;
    } else if (!emailRegex.test(email)) {
        mensajeValidacion.textContent = 'Ingresá un correo electrónico válido.';
        mensajeValidacion.className = 'alert alert-danger';
        return;
    } else if (email !== emailCofirmado) {
        mensajeValidacion.textContent = 'Los correos no coinciden.';
        mensajeValidacion.className = 'alert alert-warning';
        return;
    } else if (mensaje.length < 7) {
        mensajeValidacion.textContent = 'Escribí una consulta más detallada.';
        mensajeValidacion.className = 'alert alert-warning';
        return;
    } else {
        // Si todo está bien:
        mensajeValidacion.textContent = `Gracias por su contacto ${nombre}. En breve le estaré respondiendo.`;
        mensajeValidacion.className = 'alert alert-success';
    }

    this.reset();
});