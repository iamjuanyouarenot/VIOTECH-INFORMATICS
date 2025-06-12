document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombres = document.getElementById("nombres").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const correo = document.getElementById("correo electronico").value.trim().toLowerCase();
  const telefono = document.getElementById("telefono").value.trim();
  const password = document.getElementById("contraseña").value;
  const confirmPassword = document.getElementById("confirmar contraseña").value;
  const mensaje = document.getElementById("mensaje");

  // Validaciones básicas
  if (!nombres || !apellidos || !correo || !telefono || !password || !confirmPassword) {
    mensaje.textContent = "Todos los campos son obligatorios.";
    mensaje.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    mensaje.textContent = "Correo inválido.";
    mensaje.style.color = "red";
    return;
  }

  if (!/^[0-9]{9}$/.test(telefono)) {
    mensaje.textContent = "Número de teléfono inválido (9 dígitos).";
    mensaje.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    mensaje.textContent = "Las contraseñas no coinciden.";
    mensaje.style.color = "red";
    return;
  }

  // Leer registros existentes de localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el correo ya está registrado
  const existe = usuarios.find(user => user.correo === correo);
  if (existe) {
    mensaje.textContent = "Este correo ya está registrado. ¿Deseas iniciar sesión?";
    mensaje.style.color = "orange";
    return;
  }

  // Agregar nuevo usuario
  const nuevoUsuario = {
    nombres,
    apellidos,
    correo,
    telefono,
    password 
  };

  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensaje.textContent = "Registro exitoso.";
  mensaje.style.color = "green";
setTimeout(() => {
  window.location.href = "login.html";
}, 2000);  // espera 2 segundos antes de redirigir

  // Limpiar formulario
  document.getElementById("registroForm").reset();
});
