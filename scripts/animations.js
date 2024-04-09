// Selecionando o elementos do DOM
const logoImage = document.querySelector('header .logo-container img');

//Animação da logo no header
const originalImageUrl = logoImage.src;
const newImageUrl = '../assets/logo-duobase.gif';

logoImage.addEventListener('mouseover', () => {
  logoImage.src = newImageUrl;
});

logoImage.addEventListener('mouseout', () => {
  logoImage.src = originalImageUrl;
});


//Animação de descer e subir o header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.style.boxShadow = "-5px 0px 10px #0000005e";
  if (window.scrollY === 0) {
    VoltarTopo(header);
  }
});

function VoltarTopo(header) {
  header.style.boxShadow = "none";
}