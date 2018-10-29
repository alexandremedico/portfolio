// changement de page entre la une et la deux quand resolution sur petit ecran
document.querySelector('button').addEventListener('click', function() {
  document.querySelector('.dfs').classList.toggle('none');
  // si dfs n'a pas none, il l'applique.
  document.querySelector('.dfsa').classList.toggle('none');
  // si dfsa n'a pas none, il l'applique.

  if (document.querySelector('.dfs').classList.contains('none')) {
    // on séléctionne dfs s'il contienne none mettre page 1 sur le boutton
    document.querySelector('button').innerHTML = "Page 1";
  } else if (document.querySelector('.dfsa').classList.contains('none')) {
    // on séléctionne dfsa s'il contienne none mettre page 2 sur le boutton
    document.querySelector('button').innerHTML = "Page 2";
  }
})

// Chargement des barres de compétences quand 50% de la page est scroll
// window.onscroll = function() {myFunction()};
// function myFunction() {
//     if (document.querySelector('.container4').scrollTop > 500) {
//         document.getElementById("compétences").className = "container4";
//     } else {
//         document.getElementById("compétences").className = "";
//     }
// }

// Menu qui se cache en scrollant vers le bas etq ui se re-affiche quand on scrolle vers le haut
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
