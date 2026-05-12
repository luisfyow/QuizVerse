const banco = {
  historia: {
    nome: "História",
    perguntas: [
      ["Quem foi o primeiro presidente do Brasil?", ["Deodoro da Fonseca", "Getúlio Vargas", "Dom Pedro II", "Juscelino Kubitschek"], 0],
      ["Em que ano o Brasil foi descoberto?", ["1492", "1500", "1808", "1822"], 1],
      ["Quem proclamou a independência do Brasil?", ["Dom Pedro I", "Tiradentes", "Getúlio Vargas", "Marechal Deodoro"], 0],
      ["A Revolução Francesa começou em qual ano?", ["1789", "1815", "1914", "1763"], 0],
      ["Quem assinou a Lei Áurea?", ["Princesa Isabel", "Dom Pedro I", "Tiradentes", "Getúlio Vargas"], 0],
      ["Qual civilização construiu as pirâmides?", ["Romanos", "Gregos", "Egípcios", "Maias"], 2],
      ["A Primeira Guerra Mundial começou em:", ["1914", "1939", "1945", "1901"], 0],
      ["Quem foi Tiradentes?", ["Imperador", "Líder da Inconfidência Mineira", "Presidente", "Navegador"], 1],
      ["Júlio César foi importante em qual império?", ["Egípcio", "Romano", "Persa", "Bizantino"], 1],
      ["A queda do Muro de Berlim ocorreu em:", ["1989", "1999", "1975", "1964"], 0],
      ["Quem liderou a Alemanha nazista?", ["Stalin", "Hitler", "Mussolini", "Churchill"], 1],
      ["O Brasil virou república em:", ["1822", "1889", "1500", "1930"], 1],
      ["Qual evento marcou o início da Idade Moderna?", ["Queda de Constantinopla", "Primeira Guerra", "Independência do Brasil", "Revolução Industrial"], 0],
      ["Quem foi conhecido como Pai dos Pobres?", ["Jânio Quadros", "Getúlio Vargas", "Lula", "Dom Pedro II"], 1],
      ["A civilização grega surgiu em qual continente?", ["Ásia", "Europa", "África", "América"], 1]
    ]
  },

  geografia: {
    nome: "Geografia",
    perguntas: [
      ["Qual é o maior país do mundo?", ["China", "Canadá", "Rússia", "Brasil"], 2],
      ["Qual é o maior oceano?", ["Atlântico", "Pacífico", "Índico", "Ártico"], 1],
      ["Qual é a capital do Brasil?", ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], 1],
      ["O rio Amazonas fica em qual continente?", ["África", "América do Sul", "Europa", "Ásia"], 1],
      ["Qual é o menor continente?", ["Europa", "Oceania", "África", "Antártida"], 1],
      ["Qual país parece uma bota?", ["Itália", "França", "Chile", "México"], 0],
      ["Qual é a capital da França?", ["Londres", "Paris", "Roma", "Berlim"], 1],
      ["Qual é o maior estado do Brasil?", ["Pará", "Amazonas", "Bahia", "Mato Grosso"], 1],
      ["A Cordilheira dos Andes fica na:", ["Europa", "América do Sul", "Ásia", "África"], 1],
      ["Qual é a capital do Japão?", ["Pequim", "Tóquio", "Seul", "Bangkok"], 1],
      ["Macapá fica em qual estado?", ["Pará", "Amapá", "Amazonas", "Roraima"], 1],
      ["Qual é o deserto mais quente do mundo?", ["Saara", "Gobi", "Atacama", "Kalahari"], 0],
      ["Qual planeta é conhecido como planeta azul?", ["Marte", "Terra", "Netuno", "Vênus"], 1],
      ["Qual país fica ao sul do Brasil?", ["Argentina", "Uruguai", "Chile", "Peru"], 1],
      ["Qual é o país mais populoso do mundo?", ["Índia", "China", "EUA", "Brasil"], 0]
    ]
  },

  ciencia: {
    nome: "Ciência",
    perguntas: [
      ["Qual órgão bombeia sangue?", ["Pulmão", "Cérebro", "Coração", "Fígado"], 2],
      ["Qual é a fórmula da água?", ["CO2", "H2O", "O2", "NaCl"], 1],
      ["Qual planeta é vermelho?", ["Vênus", "Marte", "Júpiter", "Saturno"], 1],
      ["Qual gás respiramos?", ["Oxigênio", "Nitrogênio", "Hélio", "Hidrogênio"], 0],
      ["Qual é a unidade básica da vida?", ["Átomo", "Célula", "Molécula", "Tecido"], 1],
      ["A Terra gira em torno de qual estrela?", ["Lua", "Sol", "Vênus", "Marte"], 1],
      ["Qual é o maior órgão do corpo humano?", ["Pele", "Coração", "Pulmão", "Estômago"], 0],
      ["Qual força nos prende ao chão?", ["Magnetismo", "Gravidade", "Atrito", "Pressão"], 1],
      ["Qual destes é um metal?", ["Oxigênio", "Ferro", "Carbono", "Hélio"], 1],
      ["Qual é o estado físico do gelo?", ["Líquido", "Gasoso", "Sólido", "Plasma"], 2],
      ["Quantos planetas há no Sistema Solar?", ["7", "8", "9", "10"], 1],
      ["Qual instrumento mede temperatura?", ["Barômetro", "Termômetro", "Velocímetro", "Altímetro"], 1],
      ["Qual vitamina é produzida com ajuda do Sol?", ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina K"], 2],
      ["O DNA está ligado à:", ["Genética", "Respiração", "Digestão", "Audição"], 0],
      ["Qual destes animais é mamífero?", ["Tubarão", "Golfinho", "Jacaré", "Pinguim"], 1]
    ]
  },

  esportes: {
    nome: "Esportes",
    perguntas: [
      ["Quantos jogadores tem um time de futebol em campo?", ["9", "10", "11", "12"], 2],
      ["Quem venceu a Copa do Mundo de 2002?", ["Alemanha", "Brasil", "França", "Itália"], 1],
      ["No basquete, cesta de longa distância vale:", ["1", "2", "3", "4"], 2],
      ["Qual esporte usa peteca?", ["Tênis", "Badminton", "Golfe", "Vôlei"], 1],
      ["Pelé ficou famoso em qual esporte?", ["Vôlei", "Basquete", "Futebol", "Tênis"], 2],
      ["Michael Jordan jogava:", ["Futebol", "Basquete", "Boxe", "Natação"], 1],
      ["UFC é ligado a:", ["MMA", "Futebol", "Tênis", "Corrida"], 0],
      ["Usain Bolt é famoso no:", ["Atletismo", "Futebol", "Tênis", "Boxe"], 0],
      ["Qual esporte usa luvas e ringue?", ["Boxe", "Golfe", "Rugby", "Beisebol"], 0],
      ["Cristiano Ronaldo é de qual país?", ["Brasil", "Portugal", "Espanha", "Argentina"], 1],
      ["Quantos minutos tem um jogo de futebol sem acréscimos?", ["60", "70", "90", "100"], 2],
      ["Qual país é conhecido pelo sumô?", ["China", "Japão", "Coreia", "Índia"], 1],
      ["Na Fórmula 1, o objetivo é:", ["Marcar gols", "Vencer corridas", "Fazer pontos", "Nadar rápido"], 1],
      ["Qual esporte é jogado com raquete e bola amarela?", ["Tênis", "Vôlei", "Boxe", "Futebol"], 0],
      ["Qual competição é famosa no futebol europeu?", ["Champions League", "NBA", "UFC", "Wimbledon"], 0]
    ]
  },

  musica: {
    nome: "Música",
    perguntas: [
      ["Qual é a primeira nota musical?", ["Dó", "Ré", "Mi", "Fá"], 0],
      ["Quantas cordas normalmente tem um violão?", ["4", "5", "6", "7"], 2],
      ["Quem é conhecido como Rei do Pop?", ["Elvis Presley", "Michael Jackson", "Freddie Mercury", "Prince"], 1],
      ["Qual instrumento tem teclas brancas e pretas?", ["Violino", "Piano", "Bateria", "Flauta"], 1],
      ["Qual destes é um gênero brasileiro?", ["Samba", "Jazz", "Rock", "Blues"], 0],
      ["Qual banda cantou Bohemian Rhapsody?", ["Queen", "Beatles", "Nirvana", "U2"], 0],
      ["Qual instrumento usa baquetas?", ["Bateria", "Violão", "Saxofone", "Teclado"], 0],
      ["Quem é conhecido como Rei do Rock?", ["Elvis Presley", "Michael Jackson", "Bob Marley", "John Lennon"], 0],
      ["Qual estilo musical tem origem na Jamaica?", ["Reggae", "Samba", "Funk", "Forró"], 0],
      ["Qual destes é cantor brasileiro?", ["Djavan", "Bruno Mars", "Ed Sheeran", "Drake"], 0],
      ["O baixo geralmente faz sons:", ["Graves", "Agudos", "Letra", "Luz"], 0],
      ["Qual é instrumento de sopro?", ["Flauta", "Bateria", "Violão", "Piano"], 0],
      ["Qual app é famoso por músicas?", ["Spotify", "Excel", "Photoshop", "Gmail"], 0],
      ["Qual ritmo é nordestino?", ["Forró", "Trap", "Jazz", "Metal"], 0],
      ["A velocidade da música é chamada de:", ["Ritmo", "Tom", "Tempo", "Acorde"], 2]
    ]
  },

  gerais: {
    nome: "Gerais",
    perguntas: [
      ["Quantos dias tem um ano comum?", ["360", "365", "366", "370"], 1],
      ["Azul + amarelo resulta em:", ["Verde", "Roxo", "Laranja", "Preto"], 0],
      ["Quantas horas tem um dia?", ["12", "24", "30", "48"], 1],
      ["Qual animal é conhecido como rei da selva?", ["Tigre", "Leão", "Elefante", "Gorila"], 1],
      ["Qual é o idioma oficial do Brasil?", ["Inglês", "Espanhol", "Português", "Francês"], 2],
      ["Qual mês vem depois de março?", ["Abril", "Maio", "Fevereiro", "Junho"], 0],
      ["Quantas pernas tem uma aranha?", ["6", "8", "10", "12"], 1],
      ["Qual é o oposto de quente?", ["Morno", "Gelado", "Frio", "Claro"], 2],
      ["Qual alimento vem do cacau?", ["Chocolate", "Pão", "Arroz", "Queijo"], 0],
      ["Qual destes é transporte?", ["Carro", "Mesa", "Cadeira", "Livro"], 0],
      ["Qual número vem depois do 99?", ["98", "100", "101", "90"], 1],
      ["Qual é a capital de Portugal?", ["Lisboa", "Madrid", "Roma", "Paris"], 0],
      ["Qual é usado para escrever?", ["Caneta", "Colher", "Chave", "Sapato"], 0],
      ["Qual é o maior mamífero do mundo?", ["Elefante", "Baleia-azul", "Girafa", "Hipopótamo"], 1],
      ["Qual rede social é focada em fotos e vídeos?", ["Instagram", "Excel", "Word", "Windows"], 0]
    ]
  }
};

let categoriaAtual = "";
let perguntasAtuais = [];
let indice = 0;
let pontos = 0;
let vidas = 3;
let tempo = 20;
let intervalo = null;
let travado = false;
let revisao = [];

const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const categoriaTitulo = document.getElementById("categoriaTitulo");
const contador = document.getElementById("contador");
const perguntaTexto = document.getElementById("perguntaTexto");
const alternativas = document.getElementById("alternativas");
const pontosHTML = document.getElementById("pontos");
const vidasHTML = document.getElementById("vidas");
const timerHTML = document.getElementById("timer");
const barra = document.getElementById("barra");

function iniciarQuiz(categoria) {
  categoriaAtual = categoria;
  perguntasAtuais = [...banco[categoria].perguntas].sort(() => Math.random() - 0.5);
  indice = 0;
  pontos = 0;
  vidas = 3;
  tempo = 20;
  travado = false;
  revisao = [];

  home.classList.remove("active");
  resultado.classList.remove("active");
  quiz.classList.add("active");

  pontosHTML.textContent = pontos;
  vidasHTML.textContent = vidas;
  timerHTML.textContent = tempo;

  carregarPergunta();
}

function carregarPergunta() {
  travado = false;

  const atual = perguntasAtuais[indice];

  categoriaTitulo.textContent = banco[categoriaAtual].nome;
  contador.textContent = `Pergunta ${indice + 1} de ${perguntasAtuais.length}`;
  perguntaTexto.textContent = atual[0];

  barra.style.width = `${(indice / perguntasAtuais.length) * 100}%`;

  alternativas.innerHTML = "";

  atual[1].forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.className = "alternativa";
    botao.textContent = texto;
    botao.onclick = () => responder(i);
    alternativas.appendChild(botao);
  });

  iniciarTimer();
}

function iniciarTimer() {
  clearInterval(intervalo);

  tempo = 20;
  timerHTML.textContent = tempo;

  intervalo = setInterval(() => {
    tempo--;
    timerHTML.textContent = tempo;

    if (tempo <= 0) {
      clearInterval(intervalo);
      responder(-1);
    }
  }, 1000);
}

function responder(opcao) {
  if (travado) return;

  travado = true;
  clearInterval(intervalo);

  const atual = perguntasAtuais[indice];
  const correta = atual[2];
  const botoes = document.querySelectorAll(".alternativa");

  botoes[correta].classList.add("correta");

  if (opcao === correta) {
    pontos += 10;
    pontosHTML.textContent = pontos;
  } else {
    vidas--;
    vidasHTML.textContent = vidas;

    if (opcao >= 0 && botoes[opcao]) {
      botoes[opcao].classList.add("errada");
    }

    revisao.push({
      pergunta: atual[0],
      suaResposta: opcao >= 0 ? atual[1][opcao] : "Tempo esgotado",
      correta: atual[1][correta]
    });
  }

  setTimeout(() => {
    indice++;

    if (vidas <= 0 || indice >= perguntasAtuais.length) {
      finalizarQuiz();
    } else {
      carregarPergunta();
    }
  }, 900);
}

function finalizarQuiz() {
  clearInterval(intervalo);

  quiz.classList.remove("active");
  resultado.classList.add("active");

  const acertos = pontos / 10;

  document.getElementById("resultadoAcertos").textContent = acertos;

  salvarRecorde();

  const melhor = localStorage.getItem("quizverse_recorde") || 0;
  document.getElementById("melhorPontuacao").textContent = melhor;

  let mensagem = "";

  if (vidas <= 0) {
    mensagem = "Suas vidas acabaram. Tente novamente e melhore sua pontuação.";
  } else if (acertos <= 5) {
    mensagem = "Você pode melhorar. Tente outra vez e veja sua evolução.";
  } else if (acertos <= 10) {
    mensagem = "Bom resultado! Você tem uma boa base de conhecimento.";
  } else {
    mensagem = "Excelente! Você mandou muito bem nessa categoria.";
  }

  document.getElementById("resultadoTexto").textContent = mensagem;

  mostrarRevisao();
}

function salvarRecorde() {
  const melhor = Number(localStorage.getItem("quizverse_recorde")) || 0;

  if (pontos > melhor) {
    localStorage.setItem("quizverse_recorde", pontos);
  }
}

function mostrarRevisao() {
  const revisaoHTML = document.getElementById("revisao");

  if (revisao.length === 0) {
    revisaoHTML.innerHTML = "<p>Você não errou nenhuma pergunta. Excelente!</p>";
    return;
  }

  revisaoHTML.innerHTML = "<h3>Revisão dos erros</h3>";

  revisao.forEach(item => {
    revisaoHTML.innerHTML += `
      <div class="revisao-item">
        <strong>${item.pergunta}</strong>
        <p>Sua resposta: ${item.suaResposta}</p>
        <p>Resposta correta: ${item.correta}</p>
      </div>
    `;
  });
}

function reiniciarQuiz() {
  iniciarQuiz(categoriaAtual);
}

function voltarHome() {
  clearInterval(intervalo);

  quiz.classList.remove("active");
  resultado.classList.remove("active");
  home.classList.add("active");
}