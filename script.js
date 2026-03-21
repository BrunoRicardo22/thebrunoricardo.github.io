const prompts = {
  strategy: {
    mode: 'Estratégia expansiva',
    responses: [
      'O orb recomenda atacar poucas frentes, mas com intensidade ridícula: clareza vende mais do que complexidade.',
      'Detectei a jogada ideal: combinar presença forte, estética memorável e uma oferta impossível de ignorar.',
      'Minha leitura estratégica é simples: construa um símbolo tão marcante que o resto do mercado pareça ruído.'
    ],
    thoughts: [
      'Mapeando oportunidades com maior assimetria positiva.',
      'Priorizando movimentos com alto impacto narrativo.',
      'Filtrando distrações que parecem urgentes, mas não mudam o jogo.'
    ]
  },
  design: {
    mode: 'Design hipnótico',
    responses: [
      'Formas circulares e brilho controlado criam a sensação de inteligência calma, quase alienígena.',
      'O orb sugere contraste dramático: fundo escuro, luz viva e animações lentas para parecer sofisticado.',
      'Design excelente não grita. Ele puxa o olhar, sustenta atenção e deixa um eco mental.'
    ],
    thoughts: [
      'Ajustando equilíbrio entre mistério e legibilidade.',
      'Reduzindo ruído visual para amplificar presença.',
      'Sincronizando luz, profundidade e movimento.'
    ]
  },
  future: {
    mode: 'Previsão elegante',
    responses: [
      'No futuro, interfaces carismáticas vão parecer entidades: menos dashboard, mais presença.',
      'Minha previsão favorita: produtos que explicam intenção com emoção vão vencer produtos apenas funcionais.',
      'O próximo salto não é só inteligência artificial. É inteligência com aura.'
    ],
    thoughts: [
      'Analisando sinais fracos de comportamento digital.',
      'Projetando experiências com personalidade persistente.',
      'Estimando o valor de interfaces emocionalmente legíveis.'
    ]
  },
  chaos: {
    mode: 'Caos produtivo',
    responses: [
      'Caos bom é energia sem burocracia: experimente rápido, aprenda brutalmente e mantenha o brilho.',
      'Às vezes a solução genial é quase absurda. O orb aprova ideias ousadas com execução precisa.',
      'Se tudo estiver comportado demais, adicione uma faísca. Marcas memoráveis sempre vibram um pouco além.'
    ],
    thoughts: [
      'Convertendo impulsos criativos em testes úteis.',
      'Mantendo o sistema instável o suficiente para inovar.',
      'Controlando o caos para gerar surpresa, não confusão.'
    ]
  }
};

const responseEl = document.getElementById('orb-response');
const modeEl = document.getElementById('mode-label');
const thoughtList = document.getElementById('thought-list');
const buttons = [...document.querySelectorAll('.prompt-button')];
const shuffleButton = document.getElementById('shuffle');

let currentPrompt = 'strategy';
let currentIndex = 0;

function renderPrompt(promptKey, randomize = false) {
  const prompt = prompts[promptKey];
  currentPrompt = promptKey;
  currentIndex = randomize
    ? Math.floor(Math.random() * prompt.responses.length)
    : (currentIndex + 1) % prompt.responses.length;

  responseEl.textContent = prompt.responses[currentIndex];
  modeEl.textContent = prompt.mode;
  thoughtList.innerHTML = '';

  prompt.thoughts.forEach((thought) => {
    const item = document.createElement('li');
    item.textContent = thought;
    thoughtList.appendChild(item);
  });

  buttons.forEach((button) => {
    button.classList.toggle('active', button.dataset.prompt === promptKey);
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => renderPrompt(button.dataset.prompt, true));
});

shuffleButton.addEventListener('click', () => renderPrompt(currentPrompt, true));

renderPrompt(currentPrompt, true);
