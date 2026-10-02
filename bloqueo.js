// BLOQUEO CON FECHA DE CORTE - MENSAJE DE SOPORTE CENTRADO
function verificarRecordatorioPorURL() {
    
    // 1. BASE DE DATOS DE URLs DEUDORAS
    var agenciasDeudoras = [
        {
            urlMatch: "crm.lig01.com/agency_launchpad", // O el dominio que desees bloquear
            fechaBloqueo: "2026-10-05", // Fecha en la que aparecerá el bloqueo (AAAA-MM-DD)
            // Puedes poner un correo (mailto:...) o un link de WhatsApp (https://wa.me/...)
            linkSoporte: "mailto:soporte@tuagencia.com" 
        }
    ];

    var urlActual = window.location.href;
    var datosCliente = null;
    var hoy = new Date();

    for (var i = 0; i < agenciasDeudoras.length; i++) {
        var fechaCorte = new Date(agenciasDeudoras[i].fechaBloqueo + "T00:00:00");
        if (urlActual.includes(agenciasDeudoras[i].urlMatch) && hoy >= fechaCorte) {
            datosCliente = agenciasDeudoras[i];
            break; 
        }
    }
    
    if (datosCliente) {
        if (document.getElementById("bloqueo-minimal-overlay")) return; 

        if (!document.getElementById("css-bloqueo-minimal")) {
            var estilosCSS = `
                <style id="css-bloqueo-minimal">
                    .bloqueo-minimal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(17, 24, 39, 0.4); display: flex; justify-content: center; align-items: center; z-index: 9999999; font-family: system-ui, -apple-system, sans-serif; backdrop-filter: blur(8px); }
                    .bloqueo-minimal-caja { background: #ffffff; padding: 40px; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); position: relative; max-width: 440px; width: 90%; text-align: center; border: 1px solid #f3f4f6; animation: aparecer 0.4s ease-out; }
                    .minimal-icono-alerta { width: 64px; height: 64px; background: #fef2f2; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #ef4444; }
                    .bloqueo-minimal-caja h2 { color: #111827; margin: 0 0 12px; font-size: 22px; font-weight: 600; }
                    .bloqueo-minimal-caja p.descripcion { color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 24px; }
                    
                    /* Nueva caja centrada de soporte */
                    .caja-soporte { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 14px; padding: 24px; text-align: center; }
                    .texto-soporte { margin: 0 0 14px; color: #374151; font-weight: 600; font-size: 16px; }
                    .btn-soporte { display: inline-flex; align-items: center; justify-content: center; gap: 8px; background-color: #ef4444; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 15px; font-weight: 600; transition: background-color 0.2s; }
                    .btn-soporte:hover { background-color: #dc2626; }
                    
                    .mensaje-footer { font-size: 13px; color: #9ca3af; margin-top: 24px; margin-bottom: 0; }
                    @keyframes aparecer { from { opacity: 0; transform: translateY(15px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', estilosCSS);
        }

        var htmlBloqueo = `
            <div id="bloqueo-minimal-overlay" class="bloqueo-minimal-overlay">
                <div class="bloqueo-minimal-caja">
                    <div class="minimal-icono-alerta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                    </div>
                    <h2>Acceso Restringido</h2>
                    <p class="descripcion">Tu acceso al sistema ha sido suspendido temporalmente por un saldo pendiente. Para restaurar el servicio, por favor comunícate con nuestro equipo.</p>
                    
                    <div class="caja-soporte">
                        <p class="texto-soporte">Contacta con Soporte</p>
                        <a href="${datosCliente.linkSoporte}" target="_blank" class="btn-soporte">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0Aquí tienes el código actualizado. He eliminado las secciones de pago, simplificado el diseño para que todo el contenido esté perfectamente centrado y añadido un botón elegante que redirige directamente a tu correo de soporte.

Reemplaza el contenido de tu archivo en GitHub con este nuevo código:

```javascript
// BLOQUEO CON FECHA DE CORTE - CONTACTAR SOPORTE
function verificarRecordatorioPorURL() {
    
    // 1. BASE DE DATOS DE URLs DEUDORAS
    var agenciasDeudoras = [
        {
            urlMatch: "[crm.lig01.com/agency_launchpad](https://crm.lig01.com/agency_launchpad)", 
            emailSoporte: "soporte@tuagencia.com", // Cambia esto por tu correo real
            fechaBloqueo: "2026-10-05" 
        }
    ];

    var urlActual = window.location.href;
    var datosCliente = null;
    var hoy = new Date();

    for (var i = 0; i < agenciasDeudoras.length; i++) {
        var fechaCorte = new Date(agenciasDeudoras[i].fechaBloqueo + "T00:00:00");
        if (urlActual.includes(agenciasDeudoras[i].urlMatch) && hoy >= fechaCorte) {
            datosCliente = agenciasDeudoras[i];
            break; 
        }
    }
    
    if (datosCliente) {
        if (document.getElementById("bloqueo-soporte-overlay")) return; 

        // INYECTAR CSS (Diseño centrado, minimalista y sin distracciones)
        if (!document.getElementById("css-bloqueo-soporte")) {
            var estilosCSS = `
                <style id="css-bloqueo-soporte">
                    .bloqueo-soporte-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(17, 24, 39, 0.5); display: flex; justify-content: center; align-items: center; z-index: 9999999; font-family: system-ui, -apple-system, sans-serif; backdrop-filter: blur(8px); }
                    .bloqueo-soporte-caja { background: #ffffff; padding: 45px 40px; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); position: relative; max-width: 400px; width: 90%; text-align: center; border: 1px solid #f3f4f6; animation: aparecer 0.4s ease-out; }
                    .soporte-icono-alerta { width: 64px; height: 64px; background: #fef2f2; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: #ef4444; }
                    .bloqueo-soporte-caja h2 { color: #111827; margin: 0 0 16px; font-size: 24px; font-weight: 600; }
                    .bloqueo-soporte-caja p.descripcion { color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 32px; }
                    .btn-soporte { display: inline-flex; align-items: center; justify-content: center; background-color: #111827; color: #ffffff; text-decoration: none; padding: 14px 28px; font-size: 16px; font-weight: 500; border-radius: 10px; transition: background-color 0.2s ease; width: 100%; box-sizing: border-box; }
                    .btn-soporte:hover { background-color: #374151; color: #ffffff; }
                    @keyframes aparecer { from { opacity: 0; transform: translateY(15px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', estilosCSS);
        }

        // INYECTAR HTML (Mensaje de soporte centrado)
        var htmlBloqueo = `
            <div id="bloqueo-soporte-overlay" class="bloqueo-soporte-overlay">
                <div class="bloqueo-soporte-caja">
                    <div class="soporte-icono-alerta">
                        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                    </div>
                    <h2>Acceso Restringido</h2>
                    <p class="descripcion">Tu acceso al sistema ha sido suspendido temporalmente. Para restaurar el servicio y conocer el estado de tu cuenta, comunícate con nuestro equipo de soporte.</p>
                    
                    <a href="mailto:${datosCliente.emailSoporte}?subject=Reactivación%20de%20cuenta" class="btn-soporte">
                        Contactar a Soporte
                    </a>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', htmlBloqueo);
    }
}

// Ejecutamos la comprobación cada segundo
setInterval(verificarRecordatorioPorURL, 1000);