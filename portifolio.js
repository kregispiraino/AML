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
      subtitle: "Conceito de presença social",
      media: [BASE + "insta_aml.png"],
      ratio: "portrait",
      fit: "contain",
      body: [
        "Antes de pensar em qualquer publicação, montei como ficaria o perfil da AML no Instagram. Usei a paleta, o logo e o tom da marca para mostrar, na prática, como ela apareceria nas redes.",
        "A ideia foi provar coerência. Bio, destaques, grade e linguagem conversam entre si e sustentam o posicionamento de uma empresa de autoridade em risco reputacional: sóbria, séria e confiável. É a base que faz cada peça futura parecer parte do mesmo todo."
      ]
    },

    /* 2 — Comercial (+ritmo) */
    {
      type: "video",
      kicker: "Audiovisual · Filme comercial",
      title: "Comercial +ritmo",
      subtitle: "Filme publicitário de marca",
      media: [BASE + "comercial_web.mp4"],
      poster: BASE + "comercial_poster.jpg",
      ratio: "landscape",
      body: [
        "Um filme de marca para a +ritmo, com captação real, fotografia cuidada e finalização que fecha com a assinatura da empresa. É o tipo de peça feita para construir percepção, não só para explicar um produto.",
        "Tudo aqui é decisão de direção. A profundidade de campo isola o aperto de mãos, o texto entra no ritmo do corte e a cor dá unidade à imagem. Em poucos segundos, o vídeo comunica porte e confiança. É o que separa uma marca de um anúncio qualquer."
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
        "O daily é o formato que aproxima as pessoas da marca. Enquanto o post institucional passa autoridade, o vlog mostra o bastidor, o processo e quem está por trás. É assim que se constrói confiança com o tempo.",
        "Por trás da leveza tem técnica. O corte é ágil, os primeiros segundos prendem a atenção e a história tem continuidade de um dia para o outro, o que faz a pessoa querer voltar. Frequência e recorrência viram hábito, e hábito é o que sustenta uma comunidade de verdade."
      ]
    },

    /* 4 — Animação (motion narrativo) */
    {
      type: "video",
      kicker: "Audiovisual · Animação 2D",
      title: "Animação narrativa",
      subtitle: "História ilustrada em movimento",
      media: [BASE + "animacao.mp4"],
      poster: BASE + "animacao_poster.jpg",
      ratio: "portrait",
      body: [
        "Conteúdo em animação 2D, com personagens próprios, cenários ricos e uma história contada quadro a quadro. A grande vantagem da animação é a liberdade: qualquer cena, época ou ideia vira possível, com controle total sobre cada detalhe da arte.",
        "É um formato que chama atenção pelo visual e segura quem está assistindo pela história. Quando bem feita, a animação junta o melhor dos dois lados: a beleza de um desenho e o envolvimento de uma narrativa que dá vontade de ver até o fim."
      ]
    },

    /* 3 — Carrossel 1: negociação (9602–9607) */
    {
      type: "carousel",
      kicker: "Carrossel · Conteúdo de vendas",
      title: "As perguntas secretas de uma negociação",
      subtitle: "História em 6 quadros",
      media: range(9602, 9607),
      ratio: "portrait",
      body: [
        "Pensei esse carrossel como uma pequena jornada. A capa abre com uma promessa que desperta curiosidade, os quadros do meio desenvolvem a ideia e o último entrega algo útil de verdade sobre negociação.",
        "Cada tela foi feita para você querer ver a próxima. A arte com clima cósmico, os títulos fortes e as perguntas no caminho seguram a atenção. É justamente o tipo de conteúdo que mais gera salvamentos, porque ensina enquanto entretém."
      ]
    },

    /* 4 — Carrossel 2: The Code Brasil (9608–9612) */
    {
      type: "carousel",
      kicker: "Carrossel · Educação comercial",
      title: "3 estratégias que todo comercial deve conhecer",
      subtitle: "Conteúdo educativo de marca",
      media: range(9608, 9612),
      ratio: "square",
      body: [
        "Peça educativa para a The Code Brasil. Ela explica conceitos comerciais, como cross selling, de um jeito simples e fácil de lembrar, e coloca a marca no lugar de quem entende do assunto.",
        "A montagem tem um caminho claro. A capa promete \"3 estratégias\", os quadros mantêm a mesma identidade visual e o último convida ao contato. É um conteúdo que ensina, gera autoridade e ainda chama para a ação, sem soar como propaganda."
      ]
    },

    /* 5 — Carrossel 3: ManyFi pergunta (9618–9621) */
    {
      type: "carousel",
      kicker: "Carrossel · Educação financeira",
      title: "E agora? Quando o dinheiro acaba",
      subtitle: "Da dor à solução",
      media: range(9618, 9621),
      ratio: "portrait",
      body: [
        "Carrossel da ManyFi que começa pela dor. \"Você está na metade do mês e o dinheiro acabou\" é a primeira frase, e ela cria identificação na hora, antes de qualquer solução aparecer.",
        "A composição mistura recortes, anotações à mão e o beija-flor da marca, equilibrando leveza e credibilidade. O leitor vai do reconhecer o problema até o convite para agir de um jeito natural, com o tom certo para um tema delicado como dinheiro."
      ]
    },

    /* 6 — Carrossel 4: ManyFi 3 passos (9622–9626) */
    {
      type: "carousel",
      kicker: "Carrossel · Educação financeira",
      title: "3 passos para economizar",
      subtitle: "Conteúdo prático em lista",
      media: range(9622, 9626),
      ratio: "portrait",
      body: [
        "Conteúdo em lista numerada, que costuma ser dos mais salvos, porque a pessoa guarda para aplicar depois. Cada passo ocupa um quadro só, com um número grande que organiza a leitura e dá ritmo de avanço.",
        "A arte caprichada, com a chave dourada em foco e o fundo cinematográfico, transforma um tema do dia a dia em algo desejável. É a prova de que falar de dinheiro não precisa ter cara de planilha: dá para ter estética, clareza e desejo ao mesmo tempo."
      ]
    },

    /* 7 — Carrossel 5: BiblioZap (9627–9630) */
    {
      type: "carousel",
      kicker: "Carrossel · Lançamento de produto",
      title: "BiblioZap: o que eu sou?",
      subtitle: "Apresentação em primeira pessoa",
      media: range(9627, 9630),
      ratio: "portrait",
      body: [
        "Carrossel de apresentação em que o próprio produto fala. A IA se apresenta na primeira pessoa, perguntando \"o que eu sou?\", e isso transforma a explicação de uma ferramenta em uma conversa, bem mais interessante que um manual.",
        "Tipografia grande, cores de bastante contraste e cada quadro revelando um pouco mais. No fim, o leitor entende exatamente o que o BiblioZap faz e por que vale a pena usar no WhatsApp, com a marca bem marcada do começo ao fim."
      ]
    },

    /* 8 — Posts únicos Askora (1 e 5) */
    {
      type: "single",
      kicker: "Post único · Campanha de produto",
      title: "Askora: performance em outro nível",
      subtitle: "Anúncio com a interface em destaque",
      media: [BASE + "1.sua performance em outro nível.png"],
      ratio: "portrait",
      body: [
        "Post de imagem única para a Askora, feito para converter. O título fala direto do benefício, as telas do próprio produto servem de prova e o fechamento liga a ferramenta ao resultado em vendas.",
        "Uma peça parada pode vender tanto quanto um vídeo, desde que cada elemento ajude a leitura. Aqui, a luz, a profundidade e a organização das informações levam o olhar do título até o convite final em poucos segundos."
      ]
    },
    {
      type: "single",
      kicker: "Post único · Campanha de produto",
      title: "Askora: o jogo das vendas",
      subtitle: "Conceito visual e força de marca",
      media: [BASE + "5. Podemos finalmente dizer que o Askora está mudando.png"],
      ratio: "portrait",
      body: [
        "Peça conceitual que traduz a ideia de vendas em uma imagem de competição de alto nível, com o capacete em forma de troféu. A arte em 3D, o degradê vibrante e o texto em camadas criam um pôster que faz parar o feed.",
        "É a peça que cria desejo e fortalece a marca antes de pedir qualquer coisa. Em uma única imagem, passa ambição e modernidade, e reforça a Askora como o produto que muda o jogo."
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
    if (item.fit === "contain") frame.classList.add("is-contain");

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
      img.alt = item.title + ", quadro " + (idx + 1);
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
