# Academia Up Fitness - Landing Page Moderna e Segura 🏋️‍♀️

Uma landing page profissional e altamente responsiva para academias, desenvolvida com foco em UI/UX, animações fluidas, PWA (Progressive Web App) e **rígidos protocolos de segurança no front-end**.

Este projeto foi construído para demonstrar habilidades avançadas em estilização, estruturação de layout e proteção de dados do usuário em aplicações web estáticas.

## 🚀 Funcionalidades e UI/UX
- **Design Responsivo:** Layout adaptável para qualquer tamanho de tela (Mobile-first).
- **Menu Hambúrguer:** Navegação intuitiva em dispositivos móveis.
- **Animações com CSS Grid:** Sobreposição elegante de textos no banner usando `grid-area` para evitar quebra de layout.
- **Scroll Padding:** Navegação por âncoras (`#`) suave e com recuo exato para não ser sobreposta pelo cabeçalho fixo.
- **Integração com WhatsApp:** Redirecionamento dinâmico para agendamento de aulas com formatação de mensagem.
- **PWA (Progressive Web App):** Configuração de `manifest.json` e ícones que permitem a instalação do site como um aplicativo nativo na tela inicial do celular.

## 🛡️ Camada de Segurança (O Diferencial)
Em um cenário onde a proteção de dados é inegociável, este projeto implementa defesas diretas no cliente para rodar de forma segura em ambientes estáticos como o GitHub Pages:

1. **Content Security Policy (CSP):** Implementação via meta tag no HTML para bloquear scripts de origens desconhecidas e prevenir ataques XSS (Cross-Site Scripting).
2. **Frame Busting (Anti-Clickjacking):** Defesa ativa no JavaScript que impede que a aplicação seja encapsulada em `iframes` maliciosos por golpistas tentando interceptar cliques.
3. **Sanitização de Inputs:** Uso nativo de `encodeURIComponent()` no JavaScript para limpar as entradas do formulário, garantindo que caracteres especiais e tentativas de injeção de código na URL do WhatsApp sejam neutralizadas.
4. **HTTPS / SSL:** Protocolos forçados de comunicação segura, tanto via deploy no GitHub Pages quanto por regras no `firebase.json` (HSTS).

## 💻 Tecnologias Utilizadas
* **HTML5:** Semântica e estrutura.
* **CSS3:** Variáveis CSS (Custom Properties), Flexbox, CSS Grid, Keyframes, Media Queries.
* **JavaScript (Vanilla):** Lógica de interatividade, manipulação do DOM e sanitização de dados.

---
Desenvolvido por **Ronaldo Mello**
