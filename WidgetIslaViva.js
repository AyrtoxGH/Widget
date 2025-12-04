(function() {
    // Contenedor donde se insertará el widget
    const containerId = "mi-widget-videos";

    // Reemplaza este array con los videos que quieras cargar
    const videos = [
        "https://youtu.be/MKY_t0hCwm4?list=RDMKY_t0hCwm4"
    ];

    function loadWidget() {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = "<div style='display:grid; gap:10px;'>";
        videos.forEach(url => {
            html += `<iframe width="350" height="200" src="${url}" frameborder="0" allowfullscreen></iframe>`;
        });
        html += "</div>";

        container.innerHTML = html;
    }

    // Esperar a que cargue la página
    document.addEventListener("DOMContentLoaded", loadWidget);
})();

