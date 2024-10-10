const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  // change the theme of the website
  document.body.classList.toggle("dark");
  
});


function toggleLogo() {
    var img = document.getElementById('logo').src;
    if (img.indexOf('dark.png')!=-1) {
        document.getElementById('logo').src  = 'img/logo/ligth.png';
        document.getElementById('logoDesktop').src  = 'img/logo/ligth-desk.png';
    }
     else {
       document.getElementById('logo').src = 'img/logo/dark.png';
       document.getElementById('logoDesktop').src = 'img/logo/dark-desk.png';
   }
}