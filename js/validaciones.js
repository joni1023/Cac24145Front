function validation() {
    // Limpiar mensajes de error
    document.getElementById("errorPass").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    
    // Obtener valores de los campos
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    
    let hayErrores = false;

    // Validar password
    if (password.trim() === "") {
        document.getElementById("errorPass").textContent = "El nombre es obligatorio.";
        document.getElementById("password").classList.add("input-error");
        hayErrores = true;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        document.getElementById("errorEmail").textContent = "El correo electrónico es obligatorio.";
        document.getElementById("email").classList.add("input-error");
        hayErrores = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").textContent = "El correo electrónico no es válido.";
        document.getElementById("email").classList.add("input-error");
        hayErrores = true;
    }

    // Si hay errores, evitar el envío del formulario
    if (hayErrores) {
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true; // Permitir el envío del formulario
}
