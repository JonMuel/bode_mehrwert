// Mobile-Navigation
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Kontaktformular (Demo): öffnet vorbefüllte E-Mail
  var form = document.getElementById('kontaktformular');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements['name'].value;
      var email = form.elements['email'].value;
      var msg = form.elements['nachricht'].value;
      var interessen = Array.from(form.querySelectorAll('input[name="interesse"]:checked'))
        .map(function (c) { return c.value; }).join(', ');
      var body = 'Name: ' + name + '\nE-Mail: ' + email +
        (interessen ? '\nInteresse: ' + interessen : '') + '\n\n' + msg;
      window.location.href = 'mailto:bode@bode-mehrwert.de?subject=' +
        encodeURIComponent('Anfrage über bode-mehrwert.de') +
        '&body=' + encodeURIComponent(body);
    });
  }
});
