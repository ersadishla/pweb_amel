function openNav() {
  document.getElementById('mySideNav').style.width = '300px';
  document.getElementById("main").style.marginLeft = '300px';
}

function closeNav() {
  document.getElementById('mySideNav').style.width = '0';
  document.getElementById('main').style.marginLeft= '0';
}

$(document).ready(function() {
    var i, stop;
    i = 1;
    //jumlah elemen (ada 4)
    stop = 4;

    setInterval (function() {
      if (i > stop) return;
      $('#elemen'+(i++)).toggleClass('bounce');
    }, 500)
  });
