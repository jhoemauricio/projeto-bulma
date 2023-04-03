//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

//quando clicar no icone adicionará ou removerá a classe toggle
burgerIcon.addEventListener("click",function(){
    navbarMenu.classList.toggle('is-active')
});