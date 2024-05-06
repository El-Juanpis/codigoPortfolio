// main.js o app.js

// Espera a que se cargue completamente la página
window.addEventListener('load', function() {
  // Obtiene el objeto performance
  var performance = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance;

  if (performance) {
      // Obtiene los tiempos de carga
      var timing = performance.timing;

      // Calcula los tiempos de carga individual
      var loadTime = timing.loadEventEnd - timing.navigationStart;
      var dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
      var tcpTime = timing.connectEnd - timing.connectStart;
      var requestTime = timing.responseStart - timing.requestStart;
      var responseTime = timing.responseEnd - timing.responseStart;

      // Muestra los tiempos de carga en la consola
      console.log('Tiempo total de carga: ' + loadTime + ' milisegundos');
      console.log('Tiempo de búsqueda DNS: ' + dnsTime + ' milisegundos');
      console.log('Tiempo de conexión TCP: ' + tcpTime + ' milisegundos');
      console.log('Tiempo de solicitud: ' + requestTime + ' milisegundos');
      console.log('Tiempo de respuesta del servidor: ' + responseTime + ' milisegundos');
  } else {
      console.log('El objeto performance no está disponible en este navegador.');
  }
});
