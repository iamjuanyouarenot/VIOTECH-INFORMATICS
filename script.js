document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const mensaje = document.getElementById("mensaje");

  if (password !== confirmPassword) {
    mensaje.textContent = "❌ Las contraseñas no coinciden.";
    mensaje.style.color = "red";
    return;
  }

  mensaje.textContent = "✅ Registro exitoso (simulado).";
  mensaje.style.color = "green";
});
