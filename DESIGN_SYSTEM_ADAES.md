# DESIGN SYSTEM & BRAND BIBLE — ADÃES ADVOGADOS
*Conceito: A Arquitetura do Poder e da Permanência — Brasília/DF*

Este documento serve como diretriz absoluta para o redesenho visual da interface digital do escritório **Adães Advogados**. Nenhuma linha de CSS ou elemento JSX deve ser escrito sem conformidade estrita com as regras detalhadas a seguir.

---

## 1. Brand Essence (A Essência da Marca)
A advocacia da Adães não é operacional; é **estratégica, corporativa e patrimonial**. O escritório atua na proteção de legados de alto valor, na consolidação de holdings e em defesas tributárias e societárias de alta complexidade. 
*   **Tom de Voz Visual:** Silencioso, solene, monumental, indestrutível.
*   **Conceito Base:** *"A Estrutura que Protege a Força"*.

---

## 2. Visual Positioning (Posicionamento Visual)
A marca deve se posicionar a uma distância intransponível das startups e softwares modernos (SaaS). 
*   **O que somos:** Um escritório boutique institucional de alto padrão, enraizado em Brasília, com forte inspiração no design editorial de luxo, catálogos de arte e relatórios de inteligência patrimonial.
*   **O que NÃO somos:** Um aplicativo de produtividade. Não usamos cantos arredondados macios, botões com sombras flutuantes ou tons neon.

---

## 3. Color Tokens (Sistema Cromático)

Usamos a paleta oficial exclusiva da marca. Não são permitidas cores fora deste espectro, exceto variações sutis de opacidade para linhas finas.

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  #010326 (Principal)  #063943 (Secundária)  #C79C74 (Apoio)      │
│  Deep Teal/Navy       Classic Teal          Warm Bronze          │
│                                                                  │
│  #FAEDCD (Contraste)  #0F3B3F (Legado)      #0A0A0A (Ink)        │
│  Ivory/Creme          Teal Profundo         Preto Mineral        │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

*   **`color-principal` (`#010326`):** Azul-petróleo abissal. Usado para fundos solenes de blocos de manifesto, títulos e textos primários sobre o fundo marfim.
*   **`color-secundária` (`#063943`):** Petróleo fechado clássico. Usado para detalhes de estrutura intermediária e superfícies que exigem sobriedade.
*   **`color-apoio` (`#C79C74`):** Bronze envelhecido/ouro fosco. Usado exclusivamente para acentos de texto em itálico, divisores finos (`0.5px`) e marcadores discretos.
*   **`color-contraste` (`#FAEDCD`):** Creme marfim/papel nobre. Este é o fundo principal claro do site. **O branco puro (`#ffffff`) está banido das seções**.
*   **`color-ink` (`#0A0A0A`):** Preto mineral profundo, reservado para textos de leitura em fundos claros e rodapés absolutos.

---

## 4. Typography System (Tipografia Editorial)

A tipografia deve expressar contraste rigoroso entre a história (serifa clássica) e a precisão do presente (sem serifa geométrica).

*   **Display (Títulos Principais):** **Playfair Display**
    *   Usada estritamente em pesos leves: `300` e `400`.
    *   **Itálico Editorial:** Palavras estrategicamente inclinadas (`font-style: italic`) para dar ritmo literário aos cabeçalhos e manifestos.
*   **Interface e Leitura (Parágrafos e UI):** **Outfit**
    *   Substitui inteiramente a Lato. Oferece proporções geométricas precisas.
    *   Pesos permitidos: `300` (Light para parágrafos), `500` (Medium para links/UI) e `600` (Semi-Bold para micro-acertos em caixa alta).

### Escala de Tamanhos (Fluida via `clamp`)
*   **`display-monumental`:** `clamp(48px, 6.5vw, 88px)` | Line-height: `0.95` | Letter-spacing: `-0.03em` (Hero e Títulos de Destaque).
*   **`heading-section`:** `clamp(32px, 4vw, 56px)` | Line-height: `1.05` | Playfair Display.
*   **`lead-editorial`:** `clamp(18px, 1.8vw, 24px)` | Line-height: `1.6` | Outfit 300.
*   **`body-reading`:** `16px` | Line-height: `1.8` | Outfit 300.
*   **`micro-eyebrow`:** `10px` | Line-height: `1.0` | Outfit 600 | Letter-spacing: `4px` | Text-transform: `uppercase`.

---

## 5. Layout/Grid System (Grids Modernistas)
*   **Grid de 12 Colunas Assimétrico:** Não empilhar contêineres simétricos. O layout deve lembrar a disposição de um livro de arquitetura de Brasília.
*   **Margens Externas:** `6vw` (Desktop) / `24px` (Mobile) para garantir que o conteúdo flutue no centro com espaço de sobra para respirar.
*   **Rhythm (Ritmo):** Seções alternam a distribuição de peso. Se uma imagem ocupa o lado direito na Seção A, a Seção B deve usar o espaço centralizado ou vazios alternados.

---

## 6. Spacing Scale (Espaçamento)
Utilizamos um ritmo de espaçamento solene. As seções devem ter respiros amplos para demonstrar relevância institucional:
*   **Espaçamento entre seções:** `clamp(100px, 10vw, 180px)` (Vertical Padding).
*   **Espaçamento interno de blocos:** `24px`, `32px`, `48px`, `64px`.
*   **Margem de Texto para Título:** `24px` a `32px` constante.

---

## 7. Border/Radius System (Estrutura Rígida)
Para projetar rigidez, solidez jurídica e integridade, os cantos macios e arredondados típicos de aplicações SaaS móveis são proibidos.
*   **Border Radius:** `0px` absoluto em botões, contêineres de imagens, cabeçalhos, rodapés e blocos de conteúdo.
*   **Exceção:** Máximo de `4px` estritamente para campos de entrada (`inputs`) de formulários de contato por razões de usabilidade de foco.
*   **Divisores:** Linhas horizontais e verticais devem ter espessura de `0.5px` a `1px` usando `#C79C74` ou `#063943` com opacidade reduzida.

---

## 8. Image Direction (Direção de Fotografia)
A fotografia é metade da direção de arte do site.
*   **Temas:** Arquitetura modernista de Brasília (linhas de concreto, ângulos retos, monumentos sob luz rasante), retratos sóbrios dos advogados (com iluminação natural de estúdio, tons dessaturados em bronze e marfim), e texturas táteis (concreto, mármore, bronze oxidado).
*   **Sem Escurecimento Artificial:** Banido o uso de `brightness(0.3)` constante para salvar texto. O contraste é garantido posicionando o texto nas colunas de espaço vazio do grid claro (`#FAEDCD`) e a imagem nas colunas correspondentes de forma limpa.

---

## 9. Motion Principles (O Tempo do Bronze)
O movimento deve ser elegante, "pesado" e intencional.
*   **Curva Principal:** `cubic-bezier(0.16, 1, 0.3, 1)` (Ease Out Ultra-Lento).
*   **Técnicas de Transição:**
    *   *Clip-path Reveal:* Imagens reveladas abrindo de cima para baixo de forma contida.
    *   *Parallax de Baixa Frequência:* Movimento de scroll de imagens limitado a `8%` do deslocamento natural.
    *   *Deslocamento Tipográfico:* Linhas de cabeçalhos que se revelam a partir de uma máscara de transbordamento (`overflow: hidden`).

---

## 10. Navbar System (Cabeçalho de Vidro Fosco)
*   **Visual:** Uma lâmina de vidro fosco com fundo creme translúcido (`rgba(250, 237, 205, 0.85)`) com `backdrop-filter: blur(24px)`.
*   **Estrutura:** Logo Adães à esquerda em contraste absoluto com a cor `#010326`. Links em Outfit à direita. Botão de Contato com borda fina bronze de `1px` e cantos perfeitamente retos (`0px`).
*   **Scroll State:** Transição suave de opacidade e redução milimétrica da altura vertical do cabeçalho.

---

## 11. Hero System (A Primeira Dobra)
A hero deve impactar pela elegância tipográfica e composição de espaço.
*   **Layout:** Split 60/40.
    *   Lado Esquerdo (60%): Título monumental em Playfair Display com itálicos em `#C79C74` sobre fundo `#FAEDCD`.
    *   Lado Direito (40%): Painel fotográfico vertical com corte seco retratando uma linha geométrica ou sombra monumental de Brasília.
*   **Sem Botão Principal Duplo:** Um único link elegante (`cta-link`) com flecha discreta e sublinhado de crescimento central.

---

## 12. Section System (Alternância de Canvas)
As páginas devem ser construídas alternando entre duas atmosferas cromáticas:
1.  **Atmosfera Clara (Ivory Canvas):** Fundo em creme `#FAEDCD` com tipografia principal em `#010326`. Transmite clareza, transparência, foco e sofisticação documental.
2.  **Atmosfera Escura (Deep Teal Canvas):** Fundo em azul abissal `#010326` com tipografia em creme `#FAEDCD` e acentos em bronze `#C79C74`. Transmite solenidade, poder, legado e confidencialidade.

---

## 13. Cards System (A Linha em Vez da Caixa)
*   **Proibido:** Cards arredondados cinzas com sombras flutuantes empilhados em 3 colunas.
*   **Permitido (Estrutura de Linha Editorial):** Listagem horizontal dividida por linhas finas horizontais de `0.5px` (estilo sumário de livro de luxo). Ao passar o mouse, a linha se expande verticalmente de forma sutil, a tipografia muda de cor para o bronze `#C79C74` e a imagem correspondente surge na lateral direita do grid com transição suave.

---

## 14. Editorial/News System (Layout de Revista)
*   **Estrutura:** Coluna principal assimétrica. Uma notícia de destaque monumental com imagem proeminente e texto explicativo estendido.
*   **Publicações:** Exibição com foco na data (em caixa alta, espaçamento `4px`) e título com serifa Playfair Display leve, simulando a seção de opiniões de um jornal de elite.

---

## 15. CTA System (Conversa com Sócio)
*   **Conceito:** O próximo passo não é "Compre já" ou "Agende um horário". É *"Converse com um Sócio"*.
*   **Visual:** Uma faixa solene na atmosfera escura (`#010326`). Um título editorial instigante ao lado de um botão retangular bronze (`#C79C74`) com texto em `#010326` e cantos vivos.

---

## 16. Footer System (O Encerramento Solene)
*   **Visual:** Fundo preto mineral profundo (`#0A0A0A`).
*   **Estrutura:** 4 colunas perfeitamente alinhadas com tipografia muito discreta e de baixa opacidade em marfim. Logo da Adães em versão simplificada monocromática. Informações sobre OAB e localização física em Brasília dispostas de forma a emular o expediente de um livro de prestígio.

---

## 17. Mobile Rules (Responsividade Elegante)
*   **Quebras:** Em telas móveis, as imagens assimétricas são empilhadas verticalmente de forma fluida.
*   **Menu:** Tela cheia com fundo escuro `#010326`, com links gigantes em Playfair Display itálico que surgem de baixo para cima com atraso escalonado (stagger).
*   **Tamanhos:** O título principal do site deve reduzir suavemente de `88px` para `36px` no mobile, mantendo a proporção de respiro de margem de `24px`.

---

## 18. Accessibility Rules (Acessibilidade de Luxo)
*   **Contraste:** Todas as cores de texto atendem ao padrão WCAG AAA de contraste sobre seus respectivos fundos (escuro `#010326` e marfim `#FAEDCD`).
*   **Foco Visual:** Elementos clicáveis têm indicadores de foco customizados em bronze `#C79C74`.
*   **Tags Semânticas:** Botões e links são marcados corretamente. O leitor de tela deve ler o menu como uma estrutura de navegação hierárquica clara.

---

## 19. Anti-patterns Proibidos (O que NÃO fazer)
1.  **NÃO** usar degradês coloridos de roxo/azul/rosa estilo Stripe/SaaS.
2.  **NÃO** usar `border-radius: 8px`, `12px` ou `16px` em botões ou contêineres principais.
3.  **NÃO** usar fontes arredondadas ou extremamente amigáveis no corpo de texto (como a Lato).
4.  **NÃO** escurecer fotos de arquitetura com degradê preto sólido por cima. Ajuste o grid para que o texto fique no espaço creme limpo.
5.  **NÃO** usar ícones infantis, coloridos ou ilustrações 3D.
6.  **NÃO** usar o termo "Preço", "Planos" ou "Contrate". O site trata de "Expertise", "Arquitetura Jurídica" e "Consulta Estratégica".

---

## 20. Checklist Awwwards Antes de Finalizar
*   [ ] O site possui tipografia com forte contraste de peso e inclinação (serifa itálica vs. sans geométrica)?
*   [ ] O fundo das seções claras é creme marfim `#FAEDCD` e não branco puro `#ffffff`?
*   [ ] Os cantos de todos os contêineres e botões estão perfeitamente retos (`0px`)?
*   [ ] As imagens estão sendo carregadas de forma fluida com transições `clip-path` ou `parallax` suaves rodando em GPU?
*   [ ] Não há nenhum sinal de "template de advocacia pronto" ou blocos simétricos repetitivos?
*   [ ] O cabeçalho e o cursor são leves, sem causar queda de frame (jank) no scroll?
*   [ ] A sensação final ao navegar é a de ler um livro físico de prestígio sobre a capital do país?
*   [ ] O site passa no validador de build de produção do Vite sem erros de tipagem TSX ou CSS órfão?
