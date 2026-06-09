(function () {
  "use strict";

  var BASE = "assets/Portifolio/";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ *
   *  Conteúdo do portfólio.
   *  type: "single" (imagem única) | "video" | "carousel" (galeria)
   *  Cada peça carrega título, tag de categoria e um texto técnico que
   *  explica a INTENÇÃO de marketing por trás do formato — não só o visual.
   * ------------------------------------------------------------------ */
  var ITEMS = [

    /* 1 — Branding AML (mockup de Instagram) */
    {
      type: "single",
      kicker: "Branding · Identidade de marca",
      title: "AML Reputacional",
      subtitle: "Concept de presença social",
      media: [BASE + "insta_aml.png"],
      ratio: "portrait",
      body: [
        "Estudo de identidade visual desenhado especificamente para a AML — um perfil de Instagram construído do zero com a paleta, o logotipo e o tom institucional da marca, antes de uma única publicação ir ao ar.",
        "O objetivo aqui não é \"postar\": é provar coerência de marca. Bio, destaques, grade e linguagem foram alinhados ao posicionamento de uma autoridade em risco reputacional — sóbrio, técnico e confiável. É o blueprint que garante que cada peça futura pareça parte do mesmo organismo."
      ]
    },

    /* 2 — Comercial (+ritmo) */
    {
      type: "video",
      kicker: "Audiovisual · Filme comercial",
      title: "Comercial +ritmo",
      subtitle: "VT publicitário de marca",
      media: [BASE + "comercial_web.mp4"],
      poster: BASE + "comercial_poster.jpg",
      ratio: "landscape",
      body: [
        "Filme comercial de marca: direção de fotografia cinematográfica, captação real, decupagem por planos e finalização com a assinatura visual da +ritmo. É a peça de topo de funil — feita para construir percepção, não apenas para informar.",
        "Cada decisão é técnica: profundidade de campo que isola o gesto (o aperto de mãos), lettering em movimento sincronizado ao ritmo do corte, colorização que dá unidade à marca e um fecho que fixa a assinatura. É o formato que comunica porte e confiança em poucos segundos — o tipo de produção que separa marca de anúncio."
      ]
    },

    /* 3 — Daily Vlog (vídeo) */
    {
      type: "video",
      kicker: "Audiovisual · Daily vlog",
      title: "Daily Vlog",
      subtitle: "Conteúdo de bastidor e proximidade",
      media: [BASE + "day_vlog_web.mp4"],
      poster: BASE + "day_vlog_poster.jpg",
      ratio: "portrait",
      body: [
        "O daily é o formato que humaniza a marca. Enquanto o post institucional comunica autoridade, o vlog diário mostra o processo, o bastidor e a pessoa por trás — gerando o tipo de proximidade que constrói confiança ao longo do tempo.",
        "Tecnicamente, ele alimenta o algoritmo com frequência e tempo de visualização: ritmo de corte rápido, gancho nos primeiros segundos e continuidade narrativa que faz o espectador voltar todo dia. É retenção e recorrência transformadas em hábito de audiência — a base de qualquer comunidade engajada."
      ]
    },

    /* 4 — Animação (motion narrativo) */
    {
      type: "video",
      kicker: "Audiovisual · Animação 2D",
      title: "Animação narrativa",
      subtitle: "Storytelling ilustrado em motion",
      media: [BASE + "animacao.mp4"],
      poster: BASE + "animacao_poster.jpg",
      ratio: "portrait",
      body: [
        "Conteúdo em animação 2D ilustrada: personagens com identidade própria, cenários ricos e narrativa conduzida quadro a quadro. O formato animado remove as limitações da captação real — qualquer cena, época ou metáfora vira possível, com controle total de direção de arte.",
        "É a peça que prende a atenção pela curiosidade visual e sustenta a retenção pela história. Animação bem dirigida combina o melhor de dois mundos: o impacto estético de um frame ilustrado e o engajamento de uma narrativa que o espectador quer ver até o fim."
      ]
    },

    /* 3 — Carrossel 1: negociação (9602–9607) */
    {
      type: "carousel",
      kicker: "Carrossel · Conteúdo de vendas",
      title: "As perguntas secretas de uma negociação",
      subtitle: "Storytelling editorial em 6 quadros",
      media: range(9602, 9607),
      ratio: "portrait",
      body: [
        "Carrossel construído como uma micro-jornada: capa de alto impacto que abre um loop de curiosidade, desenvolvimento quadro a quadro e um encerramento que entrega valor real sobre técnica de negociação.",
        "Cada deslize é desenhado para sustentar a atenção — direção de arte cósmica, hierarquia tipográfica forte e perguntas-âncora que puxam o leitor para o próximo card. É o formato que mais gera salvamentos e tempo de permanência no feed, exatamente porque ensina enquanto entretém."
      ]
    },

    /* 4 — Carrossel 2: The Code Brasil (9608–9612) */
    {
      type: "carousel",
      kicker: "Carrossel · Educação comercial",
      title: "3 estratégias que todo comercial deve conhecer",
      subtitle: "Conteúdo de marca com glossário",
      media: range(9608, 9612),
      ratio: "square",
      body: [
        "Peça educativa para a marca The Code Brasil: traduz conceitos comerciais — como cross selling — em definições limpas e memoráveis, num formato que posiciona a marca como referência técnica no assunto.",
        "A estrutura é estratégica: capa com promessa numérica clara (\"3 estratégias\"), cards de conceito com consistência visual e um quadro final de conversão que convida ao contato. Conteúdo que educa, gera autoridade e termina pedindo a ação — sem soar como anúncio."
      ]
    },

    /* 5 — Carrossel 3: ManyFi pergunta (9618–9621) */
    {
      type: "carousel",
      kicker: "Carrossel · Educação financeira",
      title: "E agora? — quando o dinheiro acaba",
      subtitle: "Dor, identificação e solução",
      media: range(9618, 9621),
      ratio: "portrait",
      body: [
        "Carrossel da ManyFi que abre pela dor — \"você está na metade do mês e o dinheiro acabou\" — para criar identificação imediata antes de apresentar qualquer solução. Clássico framework problema → agitação → solução aplicado ao feed.",
        "A composição mistura recortes editoriais, anotações manuscritas e o beija-flor como elemento de marca, equilibrando leveza e credibilidade. O percurso conduz naturalmente do reconhecimento do problema ao CTA, com o tom emocional certo para um tema sensível como finanças pessoais."
      ]
    },

    /* 6 — Carrossel 4: ManyFi 3 passos (9622–9626) */
    {
      type: "carousel",
      kicker: "Carrossel · Educação financeira",
      title: "3 passos para economizar",
      subtitle: "Conteúdo listável e prático",
      media: range(9622, 9626),
      ratio: "portrait",
      body: [
        "Formato em lista numerada — o tipo de conteúdo com maior taxa de salvamento, porque o leitor guarda para aplicar depois. Cada passo é um quadro autônomo, com numeração gigante que ancora a leitura e cria ritmo de progressão.",
        "A direção de arte sofisticada (a chave dourada sob foco, fundo cinematográfico) eleva um tema cotidiano a algo aspiracional. É a prova de que educação financeira não precisa parecer planilha: pode ter desejo, estética e clareza ao mesmo tempo."
      ]
    },

    /* 7 — Carrossel 5: BiblioZap (9627–9630) */
    {
      type: "carousel",
      kicker: "Carrossel · Lançamento de produto",
      title: "BiblioZap — o que eu sou?",
      subtitle: "Apresentação de marca em primeira pessoa",
      media: range(9627, 9630),
      ratio: "portrait",
      body: [
        "Carrossel de apresentação que dá voz própria ao produto: a IA fala em primeira pessoa (\"o que eu sou?\"), uma escolha de copy que transforma a explicação de uma ferramenta em uma conversa — muito mais envolvente que um manual.",
        "Tipografia ousada em escala máxima, paleta de alto contraste e progressão de revelação card a card. Une branding forte e clareza de proposta de valor: ao fim, o leitor entende exatamente o que o BiblioZap faz e por que deveria usá-lo no WhatsApp."
      ]
    },

    /* 8 — Posts únicos Askora (1 e 5) */
    {
      type: "single",
      kicker: "Post único · Campanha de produto",
      title: "Askora — performance em outro nível",
      subtitle: "Anúncio de produto com UI em destaque",
      media: [BASE + "1.sua performance em outro nível.png"],
      ratio: "portrait",
      body: [
        "Post de imagem única para a Askora, focado em conversão: headline de benefício direto, mockups da própria interface como prova visual e um fechamento que conecta o produto ao resultado comercial.",
        "Quando bem dirigida, uma peça estática vende tanto quanto um vídeo — desde que cada elemento trabalhe a favor da leitura. Aqui, luz, profundidade e hierarquia conduzem o olhar do título ao CTA em poucos segundos."
      ]
    },
    {
      type: "single",
      kicker: "Post único · Campanha de produto",
      title: "Askora — o jogo das vendas",
      subtitle: "Conceito visual e força de marca",
      media: [BASE + "5. Podemos finalmente dizer que o Askora está mudando.png"],
      ratio: "portrait",
      body: [
        "Peça conceitual que traduz \"vendas\" em uma metáfora visual de competição de alto rendimento — o capacete em troféu. Direção de arte 3D, gradiente vibrante e tipografia em camadas criam um pôster que para o scroll.",
        "É a peça que constrói desejo e território de marca antes de pedir qualquer coisa. Comunica ambição e modernidade num único frame, reforçando o posicionamento da Askora como produto que muda o jogo."
      ]
    }
  ];

  function range(a, b) {
    var out = [];
    for (var i = a; i <= b; i++) out.push(BASE + "IMG_" + i + ".jpg");
    return out;
  }

  /* ------------------------------------------------------------------ *
   *  Render
   * ------------------------------------------------------------------ */
  var stage = document.getElementById("stage");
  var dotsWrap = document.getElementById("dots");
  var elCur = document.getElementById("cur");
  var elTotal = document.getElementById("total");
  var elLabel = document.getElementById("deck-label");
  var progressBar = document.getElementById("progress-bar");
  var deck = document.getElementById("deck");
  var intro = document.getElementById("intro");

  document.getElementById("intro-count").textContent = ITEMS.length + " peças selecionadas";

  var slides = ITEMS.map(buildSlide);
  slides.forEach(function (s) { stage.appendChild(s); });
  elTotal.textContent = pad(ITEMS.length);

  // dots
  ITEMS.forEach(function (item, i) {
    var d = document.createElement("button");
    d.className = "dot";
    d.type = "button";
    d.setAttribute("role", "tab");
    d.setAttribute("aria-label", "Ir para peça " + (i + 1) + ": " + item.title);
    d.addEventListener("click", function () { goTo(i); });
    dotsWrap.appendChild(d);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function buildSlide(item, i) {
    var slide = document.createElement("article");
    slide.className = "slide";
    slide.setAttribute("data-ratio", item.ratio || "portrait");

    /* ----- media side ----- */
    var media = document.createElement("div");
    media.className = "slide-media";

    var frame = document.createElement("div");
    frame.className = "media-frame";

    if (item.type === "video") {
      var vid = document.createElement("video");
      vid.className = "media-el";
      vid.src = item.media[0];
      if (item.poster) vid.poster = item.poster;
      vid.controls = true;
      vid.playsInline = true;
      vid.preload = "none";
      vid.setAttribute("controlsList", "nodownload");
      frame.appendChild(vid);
      slide._video = vid;
    } else if (item.type === "carousel" && item.media.length > 1) {
      frame.appendChild(buildInnerCarousel(item, slide));
    } else {
      var img = document.createElement("img");
      img.className = "media-el";
      img.src = item.media[0];
      img.alt = item.title;
      img.loading = "lazy";
      img.decoding = "async";
      frame.appendChild(img);
    }
    media.appendChild(frame);

    /* ----- text side ----- */
    var text = document.createElement("div");
    text.className = "slide-text";

    var num = document.createElement("span");
    num.className = "slide-num";
    num.textContent = pad(i + 1);

    var kicker = document.createElement("p");
    kicker.className = "slide-kicker";
    kicker.textContent = item.kicker;

    var h2 = document.createElement("h2");
    h2.className = "slide-title";
    h2.textContent = item.title;

    var sub = document.createElement("p");
    sub.className = "slide-subtitle";
    sub.textContent = item.subtitle;

    text.appendChild(num);
    text.appendChild(kicker);
    text.appendChild(h2);
    text.appendChild(sub);

    var rule = document.createElement("span");
    rule.className = "slide-rule";
    text.appendChild(rule);

    item.body.forEach(function (p) {
      var par = document.createElement("p");
      par.className = "slide-body";
      par.textContent = p;
      text.appendChild(par);
    });

    slide.appendChild(media);
    slide.appendChild(text);
    return slide;
  }

  /* Inner navigable carousel for a single portfolio item */
  function buildInnerCarousel(item, slide) {
    var wrap = document.createElement("div");
    wrap.className = "carousel";

    var viewport = document.createElement("div");
    viewport.className = "carousel-viewport";

    var track = document.createElement("div");
    track.className = "carousel-track";

    item.media.forEach(function (src, idx) {
      var fig = document.createElement("figure");
      fig.className = "carousel-cell";
      var img = document.createElement("img");
      img.src = src;
      img.alt = item.title + " — quadro " + (idx + 1);
      img.loading = "lazy";
      img.decoding = "async";
      img.draggable = false;
      fig.appendChild(img);
      track.appendChild(fig);
    });
    viewport.appendChild(track);
    wrap.appendChild(viewport);

    var state = { i: 0, n: item.media.length };
    slide._carousel = state;

    var prev = arrowBtn("prev", "Imagem anterior");
    var next = arrowBtn("next", "Próxima imagem");
    wrap.appendChild(prev);
    wrap.appendChild(next);

    var counter = document.createElement("span");
    counter.className = "carousel-counter";
    wrap.appendChild(counter);

    var dots = document.createElement("div");
    dots.className = "carousel-dots";
    item.media.forEach(function (_, idx) {
      var d = document.createElement("button");
      d.type = "button";
      d.className = "cdot";
      d.setAttribute("aria-label", "Quadro " + (idx + 1));
      d.addEventListener("click", function (e) { e.stopPropagation(); set(idx); });
      dots.appendChild(d);
    });
    wrap.appendChild(dots);

    function set(idx) {
      state.i = Math.max(0, Math.min(state.n - 1, idx));
      track.style.transform = "translateX(" + (-state.i * 100) + "%)";
      counter.textContent = (state.i + 1) + " / " + state.n;
      Array.prototype.forEach.call(dots.children, function (d, k) {
        d.classList.toggle("is-active", k === state.i);
      });
      prev.disabled = state.i === 0;
      next.disabled = state.i === state.n - 1;
    }
    state.set = set;
    prev.addEventListener("click", function (e) { e.stopPropagation(); set(state.i - 1); });
    next.addEventListener("click", function (e) { e.stopPropagation(); set(state.i + 1); });

    // swipe
    var startX = null;
    viewport.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) set(state.i + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });

    set(0);
    return wrap;
  }

  function arrowBtn(dir, label) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "carousel-arrow carousel-" + dir;
    b.setAttribute("aria-label", label);
    var d = dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d +
      '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    return b;
  }

  /* ------------------------------------------------------------------ *
   *  Deck navigation
   * ------------------------------------------------------------------ */
  var current = 0;

  function render() {
    slides.forEach(function (s, i) {
      var rel = i - current;
      s.classList.toggle("is-active", i === current);
      s.classList.toggle("is-prev", rel === -1);
      s.classList.toggle("is-next", rel === 1);
      s.style.setProperty("--rel", rel);
      s.style.visibility = Math.abs(rel) > 1 ? "hidden" : "visible";
      s.setAttribute("aria-hidden", i === current ? "false" : "true");
      // pause any video not in view
      if (s._video && i !== current) { try { s._video.pause(); } catch (e) {} }
    });
    dots.forEach(function (d, i) {
      d.classList.toggle("is-active", i === current);
      d.setAttribute("aria-selected", i === current ? "true" : "false");
    });
    elCur.textContent = pad(current + 1);
    elLabel.textContent = ITEMS[current].title;
    progressBar.style.transform = "scaleX(" + ((current + 1) / ITEMS.length) + ")";
  }

  function goTo(i) {
    current = Math.max(0, Math.min(ITEMS.length - 1, i));
    render();
  }
  function nextSlide() { if (current < ITEMS.length - 1) goTo(current + 1); }
  function prevSlide() { if (current > 0) goTo(current - 1); }

  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);

  // keyboard: ← → between slides; ↑ ↓ inside active carousel
  document.addEventListener("keydown", function (e) {
    if (deck.hidden) {
      if (e.key === "Enter" || e.key === " ") { enterDeck(); }
      return;
    }
    var active = slides[current];
    if (e.key === "ArrowRight") { nextSlide(); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { prevSlide(); e.preventDefault(); }
    else if ((e.key === "ArrowDown" || e.key === "ArrowUp") && active._carousel) {
      active._carousel.set(active._carousel.i + (e.key === "ArrowDown" ? 1 : -1));
      e.preventDefault();
    } else if (e.key === "Home") { goTo(0); }
    else if (e.key === "End") { goTo(ITEMS.length - 1); }
  });

  // deck-level swipe (only when not interacting with inner carousel handled by stopPropagation)
  var sx = null, sy = null;
  stage.addEventListener("touchstart", function (e) {
    sx = e.touches[0].clientX; sy = e.touches[0].clientY;
  }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx;
    var dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) nextSlide(); else prevSlide();
    }
    sx = sy = null;
  }, { passive: true });

  /* ------------------------------------------------------------------ *
   *  Intro → deck
   * ------------------------------------------------------------------ */
  function enterDeck() {
    intro.classList.add("is-leaving");
    deck.hidden = false;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        deck.classList.add("is-on");
        render();
      });
    });
    window.setTimeout(function () { intro.style.display = "none"; }, reduce ? 0 : 700);
  }
  document.getElementById("enter").addEventListener("click", enterDeck);

  /* helpers */
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  render();
})();
