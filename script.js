function copiar(boton, texto) {
  navigator.clipboard.writeText(texto);

  boton.innerHTML = "✅ Copiado";

  setTimeout(() => {
    boton.innerHTML = "📋 Copiar";
  }, 1000);
}
