var disqus_config = function () {
    this.page.url = 'https://fug21.github.io/'; // Cambia esta URL por la URL de tu página
    this.page.identifier = 'unique_identifier'; // Cambia esto por un identificador único para tu página
};
(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://mercy.disqus.com/count.js'; // Cambia esto por tu subdominio de Disqus
    s.async = true;
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

