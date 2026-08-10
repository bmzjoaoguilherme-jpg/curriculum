// Data no cabeçalho estilo jornal + ano no rodapé
document.addEventListener('DOMContentLoaded', () => {
  const hoje = new Date();
  const opcoes = { day: '2-digit', month: 'long', year: 'numeric' };
  const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);

  const elData = document.getElementById('data-atual');
  if (elData) elData.textContent = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

  const elAno = document.getElementById('ano-atual');
  if (elAno) elAno.textContent = hoje.getFullYear();
});
