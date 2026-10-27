# Task: Site de Vendas AVA Systems (High-Converting Sales Landing Page)

## Status: Planning & Execution

### Context & Goals
- **Empresa:** AVA Systems (Tecnologia, Software de Gestão e Soluções Digitais & Automação)
- **Objetivo:** Landing Page de alta conversão para venda de planos, agendamento de demonstrações e captação de leads via WhatsApp e formulário.
- **Design System & Paleta Solicitada:**
  - Fundo principal / Seções escuras: `#06152B`
  - Cards e containers: `#06152B` com `rgba(255, 255, 255, 0.03)` e bordas em `rgba(0, 210, 211, 0.2)`
  - Gradiente CTA e destaques: `linear-gradient(135deg, #1E6BFF, #00D2D3)`
  - Tipografia: *Plus Jakarta Sans* / *Outfit* do Google Fonts, títulos em `#FFFFFF` com gradient text highlights e parágrafos em `rgba(255, 255, 255, 0.75)`
  - Estética: Glassmorphism refinado, micro-animações, cards interativos, glow effects azul/ciano e sem tons violeta (Purple Ban strictly respected).

---

## Tasks

- [ ] **Task 1: Estrutura Base e Assets**
  - Configurar estrutura limpa de arquivos em `/Users/amauri/Site-vendas/` (`index.html`, `styles.css`, `script.js`, `assets/`).
  - Copiar e integrar assets relevantes (`google-icon.png` para prova social / avaliações).

- [ ] **Task 2: Design System & CSS Moderno (`styles.css`)**
  - Implementar tokens de cores (`--bg-dark: #06152B`, `--primary-blue: #1E6BFF`, `--accent-cyan: #00D2D3`, etc.).
  - Tipografia fluida, resets modernos, utilitários de glassmorphism, gradientes e animações de scroll/hover.
  - Responsividade total para Mobile, Tablet e Desktop.

- [ ] **Task 3: Seções da Landing Page de Alta Conversão (`index.html`)**
  - **Header / Navbar:** Logo AVA Systems, links de navegação suave, badge de status do sistema e CTA "Agendar Demonstração".
  - **Hero Section:** Headline magnética com gradient text, subheadline clara sobre ganhos de produtividade e escala, botões duplos de ação rápida (Testar Agora / Ver Vídeo Demo), métricas de impacto (+98.5% eficiência, +400 empresas, 99.9% uptime) e mockup interativo de dashboard da plataforma.
  - **Social Proof / Clientes:** Logos de empresas atendidas e selo de excelência "4.9/5 estrelas no Google Reviews" usando `google-icon.png`.
  - **Soluções & Módulos AVA:** Cards interativos dos módulos (Automação de Processos, Inteligência Operacional, Integrações API, Segurança & Cloud).
  - **Demonstração Interativa:** Visualizador de métricas em tempo real com tabs alternáveis (Financeiro, Automação, BI).
  - **Planos & Preços (Pricing):** Seletor interativo Mensal / Anual (com desconto), 3 planos (Starter, Pro/Recomendado, Enterprise) com listagem detalhada de recursos e CTA direto para WhatsApp/Checkout.
  - **Depoimentos (Testimonials):** Feedbacks reais de diretores de tecnologia e gestores operacionais.
  - **FAQ Acordeão:** Perguntas frequentes com abertura e fechamento suaves.
  - **CTA Final & Lead Capture:** Formulário inteligente para solicitação de proposta personalizada ou contato imediato.
  - **Footer:** Informações institucionais, links rápidos, dados de segurança e direitos reservados.

- [ ] **Task 4: Interatividade e Lógica (`script.js`)**
  - Alternador de planos Mensal vs Anual com animação de valores.
  - Acordeão do FAQ com acessibilidade (teclado + aria).
  - Modal interativo de demonstração e integração direta com WhatsApp com mensagem pré-formatada.
  - Contador animado de estatísticas quando visível na tela (IntersectionObserver).
  - Smooth scroll e navbar com blur adaptativo ao rolar a página.

- [ ] **Task 5: Validação, Auditoria de UX e Teste Local**
  - Iniciar servidor de teste local para validar layout e responsividade.
  - Executar checagens de validação.
  - Registrar mudanças no `SESSION_LOG.md`.
