document.addEventListener('DOMContentLoaded', function() {
  // Formulario de contacto con WhatsApp
  document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    // Número de WhatsApp
    let telefono = "541161372870";
  
    // Obtener valores del formulario
    let cliente = document.querySelector("#cliente").value;
    let email = document.querySelector("#email").value;
    let numeroContacto = document.querySelector("#numero_de_contacto").value;
    let modalidad = document.querySelector("#empleado").value;
    let tipoTerapia = document.querySelector("#dispositivo").value;
    let mensaje = document.querySelector("#modelo").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    
    // Elemento para mostrar respuesta
    let resp = document.querySelector("#respuesta");
  
    // Limpiar clases previas
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    // Formatear la fecha para mejor visualización
    let fechaFormateada = '';
    if (fecha) {
      const fechaObj = new Date(fecha);
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      fechaFormateada = fechaObj.toLocaleDateString('es-ES', opciones);
    }

    // Crear URL de WhatsApp con los datos del formulario
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
      *_Psicóloga Patricia - Nueva Solicitud de Consulta_*%0A%0A
      *Datos del Paciente*%0A
      *Nombre:* ${cliente}%0A
      *Correo:* ${email}%0A
      *Teléfono:* ${numeroContacto}%0A
      *Modalidad preferida:* ${modalidad}%0A
      *Tipo de terapia:* ${tipoTerapia}%0A%0A
      *Mensaje:* ${mensaje}%0A%0A
      *Fecha solicitada:* ${fechaFormateada}%0A
      *Hora solicitada:* ${hora}%0A%0A
      *Enviado desde el formulario web*
    `;
  
    // Validar campos obligatorios
    if (cliente === "" || fecha === "" || hora === "" || email === "" || numeroContacto === "") {
      resp.classList.add("fail");
      resp.innerHTML = `<i class="fas fa-exclamation-circle"></i> Por favor complete todos los campos obligatorios.`;
      return false;
    }
    
    // Mostrar mensaje de éxito
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `<i class="fas fa-check-circle"></i> Su solicitud ha sido enviada correctamente. Pronto nos pondremos en contacto.`;
  
    // Abrir WhatsApp en una nueva ventana
    window.open(url);
    
    // Opcional: limpiar formulario después de enviar
    setTimeout(() => {
      document.querySelector(".consultation-form").reset();
    }, 3000);
  });

  // Animación de scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Validación de formato para el número de teléfono
  const telefonoInput = document.querySelector("#numero_de_contacto");
  if (telefonoInput) {
    telefonoInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }

  // Efecto visual al hacer focus en los campos del formulario
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('active');
    });
    
    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('active');
      }
    });

    // Verificar si el campo ya tiene valor al cargar la página
    if (input.value !== '') {
      input.parentElement.classList.add('active');
    }
  });
});