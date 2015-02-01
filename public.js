// bind
var fore = document.getElementById('fore');
var imgs = document.querySelectorAll('ol img');
var n = imgs.length;
var img;
while (n--){
  img = imgs[n];
  img.onclick = onclick.bind(img);
}
imgs[0].click();

// &copy;
var now = new Date;
var year = now.getUTCFullYear();
var el = document.getElementById('year');
el.innerHTML = year;

// onlick img
function onclick(e){
  var href = e.target.dataset.href;
  var src = e.target.src;
  var html = '';
  html += '<a href="'+href+'" target="_blank">';
  html += '<img src="'+src+'" width="940" height="450"/>';
  html += '</a>';
  fore.innerHTML = html;
  for (var i=0; i<imgs.length; i++){
    imgs[i].style.opacity = .5;
  }
  this.style.opacity = 1;
}