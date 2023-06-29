document.addEventListener("DOMContentLoaded", function() {
    var videoIframe = document.getElementById("video-iframe");
    videoIframe.src += "?autoplay=1";
  });

  function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-closed');
    document.body.classList.toggle('sidebar-open');
  }
  
  // Добавляем класс "sidebar-open" к <body> через небольшую задержку после загрузки страницы
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.body.classList.add('sidebar-open');
    }, 100);
  });