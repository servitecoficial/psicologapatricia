document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("consulta-form");
    const modal = document.getElementById("modal");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Simulación de un proceso de agenda
        modal.style.display = "flex";
        
        // Generar un link de pago ficticio
        const pagoLink = document.getElementById("pago-link");
        pagoLink.href = "https://www.mercadopago.com.ar/";
    });
});

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
