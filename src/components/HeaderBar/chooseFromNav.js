var lastelectedMainNav = document.getElementsByClassName('mainHeadeNavCoices')[0];
var lastSelectedEditNav = document.getElementsByClassName('mainHeadeNavCoices')[0];

for (let i = 0; i < 8; i++) {
  var test = document.getElementsByClassName('mainHeadeNavCoices')[i];
  test.addEventListener('click', changeselectedcolor);
}

function changeselectedcolor() {
  lastselectedcolor.classList.remove('defaultSelect');
  this.classList.add('defaultSelect');
  lastelectedMainNav = this;
}