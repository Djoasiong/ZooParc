// function toggleBorder(img) {
//     if(!img.style.border||img.style.borderLeftStyle=='none') {
//       img.style.border = "3px solid #deaf00";
//     } else {
//       img.style.border = "none";
//     }
//   }
let toggleImages = document.querySelector('.toggleImg');
console.log(toggleImages);
function toggleBorder(e) {
  console.log('test');
if (!e.target.style.border || img.style.borderLeftStyle == 'none') {
  e.target.style.border = '3px solid #DEAF00'
} else {
  e.target.style.border = 'none';
}
}
for (var i = 0; i < toggleImages.length; i++) {
toggleImages[i].addEventListener('click', toggleBorder, false);
} 