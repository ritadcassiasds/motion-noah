# NOAH MOTION SYSTEM

Versão: 1.0  
Base: Design System Noah — referência Stitch  
Uso: Reels, Stories, posts animados e vídeos curtos para Instagram da Noah

---

## 1. Objetivo

Este documento define uma base inicial de motion design para conteúdos em vídeo da Noah.

A proposta é transformar o Design System visual já existente em regras práticas para vídeos curtos, principalmente para Instagram.

O foco é manter consistência visual entre os conteúdos de:

- Noah Ark
- Noah Educa
- Conteúdos institucionais da Noah
- Conteúdos educativos sobre mercado imobiliário
- Conteúdos de produto

A ideia não é criar vídeos cheios de efeito.

A ideia é criar vídeos limpos, fáceis de entender e com identidade reconhecível.

---

## 2. Base visual

O Motion System parte dos tokens já existentes no Design System Noah.

### Cores principais

| Uso | Token | Hex |
|---|---|---|
| Cor principal | primary | `#F28928` |
| Texto escuro | ink | `#1B2733` |
| Fundo claro | canvas | `#FAFAFA` |
| Superfícies/cards | surface | `#FFFFFF` |

### Direção de uso

- `#F28928` deve ser usado para destaque, CTA, linhas, marcações e palavras-chave.
- `#1B2733` deve ser usado para textos principais em fundos claros e também como fundo escuro em vídeos mais institucionais.
- `#FAFAFA` deve ser usado como fundo claro principal.
- `#FFFFFF` deve ser usado em cards, caixas de texto e áreas de respiro.

---

## 3. Tipografia

Fontes de referência:

- Jakarta
- Inter
- Public Sans

### Hierarquia sugerida para vídeo

#### Título principal

Uso: primeira frase do vídeo, gancho ou mensagem central.

Regras:

- Deve ser grande.
- Deve ter poucas palavras.
- Deve ser lido em até 2 segundos.
- Preferir peso bold ou semibold.

Exemplo:

```txt
Gestão imobiliária integrada
```

#### Texto de apoio

Uso: explicar ou complementar o título.

Regras:

- Frases curtas.
- Máximo de 2 linhas por cena.
- Evitar parágrafos longos.

Exemplo:

```txt
CRM, leads, contratos e crédito em uma operação mais organizada.
```

#### CTA final

Uso: fechamento do vídeo.

Regras:

- Curto.
- Natural.
- Sem tom exagerado.

Exemplos:

```txt
Conheça o Noah Ark.
```

```txt
Siga a Noah.
```

```txt
Acompanhe a Noah.
```

---

## 4. Princípios de motion

### 4.1 Clareza antes de efeito

O movimento deve ajudar a pessoa a entender a mensagem.

Evitar efeitos que chamem mais atenção do que o conteúdo.

### 4.2 Poucas palavras por tela

Cada cena deve ter uma ideia principal.

Evitar colocar explicações longas dentro do vídeo. Quando necessário, deixar a explicação para a legenda.

### 4.3 Movimento simples

Usar animações discretas:

- fade in
- slide up
- slide left/right
- scale leve
- blur sutil
- reveal por máscara

Evitar:

- giros exagerados
- excesso de zoom
- glitch forte demais
- muitas transições diferentes no mesmo vídeo
- animações rápidas que atrapalham leitura

### 4.4 Ritmo de leitura

O vídeo deve permitir leitura confortável no celular.

Referência inicial:

| Tipo de cena | Duração sugerida |
|---|---:|
| Gancho curto | 1,5s a 2,5s |
| Frase principal | 2s a 3s |
| Explicação curta | 3s a 4s |
| CTA final | 2s a 3s |

---

## 5. Easing e transições

### Entrada de texto

Padrão recomendado:

```txt
fade in + slide up
```

Sensação desejada:

- suave
- profissional
- sem parecer efeito pronto exagerado

Easing sugerido:

```txt
ease-out
```

### Saída de texto

Padrão recomendado:

```txt
fade out rápido
```

ou

```txt
slide left + fade out
```

Easing sugerido:

```txt
ease-in
```

### Transição entre cenas

Padrões recomendados:

- corte seco quando o vídeo precisar de ritmo
- fade curto quando o conteúdo for emocional
- slide horizontal quando houver troca de cards ou blocos
- zoom muito leve quando usar imagem parada de fundo

Easing sugerido:

```txt
ease-in-out
```

---

## 6. Layouts base

### 6.1 Texto central em fundo escuro

Uso:

- vídeos institucionais
- vídeos de produto
- abertura de Reels

Estrutura:

```txt
[fundo ink]
[título central branco]
[palavra-chave em laranja]
```

Exemplo:

```txt
Gestão imobiliária integrada
```

### 6.2 Caixa branca sobre imagem

Uso:

- conteúdos educativos
- alertas
- frases curtas

Estrutura:

```txt
[imagem/vídeo de fundo]
[card branco central]
[textos em ink]
[destaque em primary]
```

Exemplo:

```txt
Viu anúncio prometendo imóvel sem entrada?
```

### 6.3 Cards de produto

Uso:

- Noah Ark
- explicação de funcionalidades
- SaaS white-label

Estrutura:

```txt
[fundo escuro]
[card branco ou escuro mais claro]
[ícone simples]
[título curto]
[textinho de apoio]
```

Exemplo:

```txt
CRM
Gestão de leads
Contratos
Análise de crédito
Portal de vendas
```

### 6.4 Tela final

Uso:

- fechamento padrão

Estrutura:

```txt
[logo Noah ou nome Noah]
[frase curta]
[CTA natural]
```

Exemplos:

```txt
Esse é o Noah Ark.
```

```txt
Noah Educa está chegando.
```

```txt
Siga a Noah.
```

---

## 7. Regras para Reels

### Formato

```txt
1080x1920
```

### Duração inicial recomendada

```txt
8 a 25 segundos
```

### Estrutura recomendada

```txt
0s–2s: gancho
2s–8s: desenvolvimento curto
8s–15s: ponto principal
15s–20s: reforço ou benefício
20s–25s: CTA ou fechamento
```

### Regras de texto

- Usar frases curtas.
- Evitar mais de 12 palavras por tela.
- Priorizar leitura rápida.
- Não colocar explicação técnica longa dentro do vídeo.
- Deixar detalhes para a legenda quando necessário.

---

## 8. Regras para Noah Ark

### Posicionamento em vídeo

Noah Ark deve ser apresentado como:

```txt
SaaS white-label para imobiliárias.
```

Com foco em:

- CRM
- gestão de leads
- contratos
- análise de crédito
- portal de vendas
- ferramentas operacionais

### Linguagem

Evitar tom genérico de startup.

Falar como quem conhece a rotina de uma imobiliária:

- lead chegando
- corretor atendendo
- cliente esperando retorno
- contrato andando
- crédito em análise
- operação precisando de controle

### Frases úteis para motion

```txt
Gestão imobiliária integrada
```

```txt
SaaS white-label
```

```txt
CRM, leads, contratos e crédito
```

```txt
Sua marca. Nossa tecnologia.
```

```txt
Esse é o Noah Ark.
```

```txt
Operação mais organizada
```

```txt
Do lead ao contrato
```

### Template inicial — Noah Ark

Duração: 20 segundos

```txt
Cena 1 — 0s a 4s
Gestão imobiliária integrada

Cena 2 — 4s a 8s
SaaS white-label

Cena 3 — 8s a 13s
CRM, leads, contratos e crédito

Cena 4 — 13s a 17s
Tudo por trás da marca da imobiliária

Cena 5 — 17s a 20s
Esse é o Noah Ark
```

### Direção visual para Noah Ark

- fundo escuro
- laranja para destacar palavras-chave
- cards de sistema
- linhas conectando etapas
- simulação de dashboard
- tela com código ou interface
- movimento limpo e técnico, mas sem exagero

---

## 9. Regras para Noah Educa

### Posicionamento em vídeo

Noah Educa deve ser apresentado como uma plataforma educacional para ajudar pessoas a entenderem a compra do imóvel.

Foco em:

- educação financeira
- compra consciente
- financiamento
- entrada
- FGTS
- custos além da entrada
- poder de compra
- segurança na decisão

### Linguagem

A linguagem deve ser mais humana e educativa.

Falar com quem quer comprar imóvel, mas ainda sente dúvida, medo ou insegurança.

### Frases úteis para motion

```txt
Comprar sem informação pode custar caro
```

```txt
Antes da chave, vem a clareza
```

```txt
Casa própria começa com informação
```

```txt
Entenda seu poder de compra
```

```txt
Sem entrada não significa sem custo
```

```txt
O Noah Educa está chegando
```

### Template inicial — Noah Educa emocional

Duração: 25 segundos

```txt
Cena 1 — 0s a 2s
Tem gente que não quer luxo.

Cena 2 — 2s a 4s
Quer paz.

Cena 3 — 4s a 8s
Para muita gente, comprar imóvel não é sobre status.

Cena 4 — 8s a 12s
É sobre ter um lugar para voltar.

Cena 5 — 12s a 16s
É parar de viver com medo do aluguel subir.

Cena 6 — 16s a 20s
É planejar o futuro com mais calma.

Cena 7 — 20s a 25s
Casa própria é menos sobre parede e mais sobre segurança.
```

### Direção visual para Noah Educa

- interiores de casa
- apartamentos com luz natural
- portas abrindo
- mesa de planejamento
- detalhes de casa
- visual mais humano
- menos interface, mais contexto de vida

---

## 10. Componentes reutilizáveis

### 10.1 Intro curta

Uso:

- início de Reels
- abertura de vídeos institucionais

Exemplos:

```txt
Gestão imobiliária integrada
```

```txt
Você sabia disso?
```

```txt
Olhe isso antes
```

### 10.2 Card de alerta

Uso:

- conteúdos educativos
- riscos
- cuidados

Estrutura:

```txt
[título curto]
[frase de apoio]
```

Exemplo:

```txt
Imóvel sem entrada?
Olhe isso antes.
```

### 10.3 Card de funcionalidade

Uso:

- Noah Ark
- produto

Exemplo:

```txt
CRM
Acompanhamento de leads e atendimento.
```

### 10.4 Tela final

Uso:

- fechamento de todos os vídeos

Exemplos:

```txt
Siga a Noah.
```

```txt
Conheça o Noah Ark.
```

```txt
Acompanhe o Noah Educa.
```

---

## 11. Templates de vídeo

### Template 1 — Reels frase forte

Uso:

- Noah Educa
- conteúdo emocional
- conteúdo de consciência

Estrutura:

```txt
Cena 1: frase de impacto
Cena 2: complemento emocional
Cena 3: contexto
Cena 4: fechamento
Cena 5: CTA
```

Exemplo:

```txt
Tem gente que não quer luxo.
Quer paz.
Casa própria é menos sobre parede.
É sobre segurança.
Siga a Noah.
```

---

### Template 2 — Reels alerta educativo

Uso:

- financiamento
- entrada
- FGTS
- custos ocultos
- leilão

Estrutura:

```txt
Cena 1: pergunta ou alerta
Cena 2: quebra de expectativa
Cena 3: ponto principal
Cena 4: frase de fechamento
Cena 5: CTA
```

Exemplo:

```txt
Imóvel sem entrada?
Olhe isso antes.
Sem entrada não significa sem custo.
Entenda antes de comprar.
Siga a Noah.
```

---

### Template 3 — Reels produto Noah Ark

Uso:

- bastidor
- produto
- SaaS
- tecnologia

Estrutura:

```txt
Cena 1: frase curta sobre operação
Cena 2: nome da solução
Cena 3: lista curta de recursos
Cena 4: benefício prático
Cena 5: fechamento
```

Exemplo:

```txt
Gestão imobiliária integrada.
SaaS white-label.
CRM, leads, contratos e crédito.
Tudo por trás da marca da imobiliária.
Esse é o Noah Ark.
```

---

## 12. Regras de legenda para vídeos

As legendas devem seguir o padrão editorial da Noah para mercado imobiliário.

### Evitar

- tom corporativo exagerado
- frases genéricas
- promessas não comprovadas
- excesso de termos técnicos
- exagero comercial
- frases com cara de IA

### Preferir

- linguagem natural
- frases que alguém do mercado realmente usaria
- exemplos do dia a dia
- termos como lead, CRM, follow-up, contrato, carteira, atendimento, financiamento, FGTS, proposta e documentação quando fizer sentido

### CTA natural

Exemplos:

```txt
Quer conhecer?
```

```txt
Fale com a gente.
```

```txt
Siga a Noah.
```

```txt
Acompanhe a Noah.
```

```txt
Se fizer sentido para sua operação, conheça a plataforma.
```

---

## 13. Prompt base para Codex — criar vídeo em HyperFrames

```txt
Com base no NOAH_MOTION_SYSTEM.md, crie um vídeo motion para Instagram Reels em 1080x1920 usando HyperFrames.

Tema:
[INSERIR TEMA]

Produto:
[Noah Ark ou Noah Educa]

Texto do vídeo:
1. [Cena 1]
2. [Cena 2]
3. [Cena 3]
4. [Cena 4]
5. [Cena 5]

Duração:
[INSERIR DURAÇÃO]

Direção visual:
- usar paleta Noah
- primary #F28928 para destaques
- ink #1B2733 para fundo escuro ou texto principal
- canvas #FAFAFA como fundo claro quando necessário
- surface #FFFFFF para cards
- usar Jakarta, Inter ou Public Sans
- textos grandes
- poucas palavras por cena
- animação com fade in + slide up
- saída com fade out rápido
- transições limpas
- sem efeitos exagerados
- vídeo sem narração

Entregue:
- estrutura do projeto
- código completo
- instruções para preview
- instruções para render
```

---

## 14. Prompt base para Codex — gerar novo template

```txt
Com base no NOAH_MOTION_SYSTEM.md, crie um novo template reutilizável de motion para Instagram.

Objetivo do template:
[educativo / produto / institucional / emocional / alerta]

Produto ou tema:
[Noah Ark / Noah Educa / mercado imobiliário]

Formato:
Reels 1080x1920

O template deve ter:
- duração sugerida
- estrutura de cenas
- regras de texto
- animações recomendadas
- componentes reutilizáveis
- exemplo preenchido
- instruções para adaptação em novos conteúdos
```

---

## 15. Checklist antes de publicar

Antes de exportar um vídeo, revisar:

```txt
O texto está legível no celular?
Tem palavras demais na tela?
A primeira frase prende atenção?
O movimento ajuda ou atrapalha?
A cor laranja está sendo usada só para destaque?
A tela final tem CTA claro?
A legenda complementa o vídeo?
O vídeo parece Noah?
```

---

## 16. Próxima evolução

Depois dos primeiros vídeos, este documento pode evoluir com:

- biblioteca de componentes HyperFrames
- exemplos reais aprovados
- padrões de música/trilha
- padrões de imagens de fundo
- templates de carrossel animado
- templates para anúncios
- templates por vertical da Noah

---

Fim do documento.
