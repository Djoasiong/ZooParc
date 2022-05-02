
let toggleImages = document.querySelectorAll('.toggleImg');
function toggleBorder(e) {
  if (!e.target.style.border || e.target.style.borderLeftStyle == 'none') {
      let toggleImages = document.querySelectorAll('.toggleImg');
      for (var i = 0; i < toggleImages.length; i++) {
          toggleImages[i].style.border ='none';
        }
    e.target.style.border = '3px solid #deaf00';
    e.target.style.borderRadius = '10px';
  } else {
    e.target.style.border = 'none';
  }
}
for (var i = 0; i < toggleImages.length; i++) {
  toggleImages[i].addEventListener('click', toggleBorder);
}