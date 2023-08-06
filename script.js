function toggleMode() {
  const html = document.documentElement //acessa o documento que significa a página e todos os seus atributos
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //query selector acessa o seletor css
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    //set atributte acessa ou altera um atributo
  } else {
    //se tiver sem lite mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
