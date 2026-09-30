# Noah Ark — template de motion para Reels

Template vertical 1080×1920, 20 segundos, baseado nas telas reais do portal Noah Broker e no `NOAH_MOTION_SYSTEM.md`. A versão atual usa a tela real de login, a logo oficial e navegação visual portal → detalhe do imóvel.

## Estrutura

- `index.html`: composição e textos editáveis por cena.
- `styles.css`: tokens Noah, layout e animações suaves.
- `app.js`: timeline de 5 cenas, 4 segundos cada.
- `telas/`: screenshots reais usados como referência visual.
- `telas/logo-oficial.jpeg`: logo oficial do Grupo Noah.
- `telas/login-sistema.png`: referência disponível para futuras trocas da tela de login.
- `render-frames.mjs`: captura PNGs em 1080×1920 para exportação.

## Preview

Abra `index.html` diretamente no navegador ou execute:

```bash
npm run preview
```

Depois acesse a URL exibida pelo `serve`.

## Render

Instale Playwright uma vez, se necessário:

```bash
npm install -D playwright
npx playwright install chromium
```

Gere frames:

```bash
npm run render:frames -- --out=frames --fps=30
```

Os PNGs podem ser convertidos para MP4 em qualquer pipeline de vídeo. Exemplo com FFmpeg instalado:

```bash
ffmpeg -framerate 30 -i frames/frame-%04d.png -c:v libx264 -pix_fmt yuv420p -movflags +faststart noah-ark-reel.mp4
```

Exportação oficial do projeto:

```bash
npm run render
```

Esse comando captura 600 frames em 1080×1920 e gera `renders/noah-ark-reels-v1.mp4`. Ele requer o executável FFmpeg disponível no PATH; alternativamente, defina `FFMPEG_PATH` apontando para o executável.

## Onde editar

1. Textos: altere os títulos e labels diretamente em `index.html`.
2. Duração: `duration` e a divisão de cenas estão em `app.js`; a duração padrão é 20s.
3. Screenshots: os módulos usam `lista-de-imoveis.png`, `leads.png` e `edição-detalhes.png`; o portal usa `portal-inicio.png` e `detalhes-imoveis-portal.png`.
4. Identidade: cores estão nas variáveis do topo de `styles.css`.
5. Layout: os cards de dashboard, pipeline e módulos são componentes HTML simples, portanto podem receber dados reais sem redesenhar a composição.

O template usa uma representação construída de dashboard e pipeline para manter leitura vertical; a faixa do portal usa screenshot real. Para uma versão 100% screenshot-driven, substitua cada bloco `.browser-frame`, `.portal-strip` ou `.module-grid` por imagens reais mantendo os mesmos containers e animações.
