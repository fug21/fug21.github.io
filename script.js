// Función para cargar los comentarios de Disqus y mostrar/ocultar el contenedor de comentarios
function toggleComentarios() {
  var comentariosDisqus = document.getElementById("comentarios-disqus");
  if (comentariosDisqus.style.display === "none") {
    comentariosDisqus.style.display = "block";
    cargarComentariosDisqus();
  } else {
    comentariosDisqus.style.display = "none";
  }
}

// Función para cargar los comentarios de Disqus
function cargarComentariosDisqus() {
  var PAGE_URL = "https://fug21.github.io/"; // URL de tu página
  var PAGE_IDENTIFIER = "pagina-unico-identificador"; // Identificador único para tu página

  if (typeof DISQUS !== "undefined") {
    DISQUS.reset({ reload: true, config: function () {
      this.page.url ="https://fug21.github.io/";
      this.page.identifier = PAGE_IDENTIFIER;
    }});
  } else {
    var d = document, s = d.createElement('script');
    s.src = 'https://cuevana3-10.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
}

// Agregar un evento al botón para que ejecute la función al hacer clic
const btnComentarios = document.getElementById("btnComentarios");
btnComentarios.addEventListener("click", toggleComentarios);

