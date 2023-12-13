document.addEventListener("DOMContentLoaded", function () {
    let footer = document.getElementById("page-footer");

    function handleScroll() {
        // Calcula la posición actual del scroll
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Obtiene la altura total de la página
        let totalHeight = document.body.scrollHeight - window.innerHeight;

        // Comprueba si el scroll está cerca del final de la página
        if (scrollPosition >= totalHeight - 50) {
            footer.style.opacity = 1; // Hace visible el pie de página
        } else {
            footer.style.opacity = 0; // Hace invisible el pie de página
        }
    }

    // Registra el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Llama a la función handleScroll cuando la página se carga para manejar el estado inicial
    handleScroll();
});



