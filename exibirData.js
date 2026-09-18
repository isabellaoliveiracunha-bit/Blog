function exibirData() {
    const agora = new Date()
    const dia = String(agora.getDate());
    const mes = String(agora.getMonth());
    const ano = agora.getUTCFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    document.getElementById('data-blog').innertext = dataFormatada;
}