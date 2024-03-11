const botaoabrir = document.querySelector(".header-mobile > button")
const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")
const botaofechar = document.querySelector(".header-mobile nav button")
botaoabrir.addEventListener('click', abrirMenu)
botaofechar.addEventListener('click',fecharMenu)

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}
function fecharMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")

}