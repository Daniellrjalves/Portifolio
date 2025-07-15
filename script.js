function enviarWhats(event) {

    event.preventDefault()

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem");
  const telefone = "5562994708706";

  const texto = `Óla, me chamo ${nome}, ${mensagem} `;
  const mensagemFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

  window.open(url, "_blank");
}
