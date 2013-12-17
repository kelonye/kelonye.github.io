// gallery
var fore = document.getElementById('fore');
var imgs = document.querySelectorAll('ol img');
var n = imgs.length;
var img;
var onclick = function(e){
  var href = e.target.dataset.href;
  var src = e.target.src;
  var html = '';
  html += '<a href="'+href+'" target="external">';
  html += '<img src="'+src+'" width="940" height="450"/>';
  html += '</a>';
  fore.innerHTML = html;
}
while (n--){
  img = imgs[n];
  img.onclick = onclick;
}
imgs[0].click();

// &copy;
var now = new Date;
var year = now.getUTCFullYear();
var yearEl = document.getElementById('year');
yearEl.innerHTML = year;