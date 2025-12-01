SolarCalc — Energia Limpa e Acessível (PWA)

O SolarCalc é uma Aplicação Web Progressiva (PWA) desenvolvida para desmistificar o investimento em energia solar fotovoltaica para residências brasileiras. O projeto atende à atividade de Sistematização da disciplina de Programação para Dispositivos Móveis, focando na experiência do usuário (UX) e na utilidade social.


Este software foi projetado para apoiar diretamente dois Objetivos de Desenvolvimento Sustentável:
ODS 7 — Energia Acessível e Limpa:
Meta: Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todos.
Aplicação: O app simula a viabilidade econômica, provando que a energia solar é acessível para a classe média.

ODS 13 — Ação Contra a Mudança Global do Clima:
Meta: Melhorar a educação e a conscientização humana sobre mitigação da mudança do clima.
Aplicação: Educa o usuário sobre a redução da pegada de carbono ao adotar painéis solares.


Integrantes do Grupo
Lucas de Alencar Vieira da Silva (RA: 72401058)


O Problema

A energia elétrica no Brasil possui uma das tarifas mais altas do mundo. Embora a energia solar seja uma solução viável, a falta de clareza sobre o Retorno sobre Investimento (Payback) e a complexidade dos orçamentos técnicos afastam potenciais adotantes, que veem a tecnologia como um "custo inalcançável".

Justificativa e Qualidade (ISO/IEC 25010)

A solução foca em Usabilidade e Confiabilidade. Diferente de planilhas complexas de engenharia, o SolarCalc oferece uma interface mobile-first intuitiva que traduz dados técnicos (kWp, geração/mês) em dados financeiros compreensíveis (Economia em R$, Tempo de retorno).

Público-Alvo

Proprietários de imóveis residenciais e pequenos comércios interessados em redução de custos fixos e sustentabilidade.

Funcionalidades (MVP)

Landing Page Educativa: Informações claras sobre prós (Valorização, Economia) e contras (Custo Inicial) da energia solar.

Modo Demo: Um estudo de caso pré-calculado para um perfil de consumo médio brasileiro, permitindo visualização imediata do potencial da tecnologia.

Calculadora Interativa:

Input simples (Valor da conta de luz).

Cálculo automático de potência necessária (kWp) e investimento estimado.

Gráfico visual de comparação de custos (Com Solar vs. Sem Solar) ao longo de 5 anos.

🛠 Tecnologias Utilizadas

Frontend Framework: Next.js 16 (React)

Estilização: Tailwind CSS

Ícones: Lucide React

Arquitetura: Mobile-First, Component-Based


Instalação e Execução

Acesso Online (Recomendado)

Você pode acessar a versão mais recente da aplicação diretamente pelo navegador, sem necessidade de instalação:

Acesse o SolarCalc no GitHub Pages

Execução Local (Para Desenvolvedores)

Caso queira rodar o projeto em sua máquina para testes ou desenvolvimento:

Pré-requisitos:

Node.js (v18 ou superior)

NPM

Passo a Passo:

Clone o repositório:

git clone [https://github.com/Lucas-AVS/solar-pwa](https://github.com/Lucas-AVS/solar-pwa)
cd solar-pwa


Instale as dependências:

npm install


Execute o servidor de desenvolvimento:

npm run dev


Acesse no navegador:
Abra http://localhost:3000.



Nota Técnica: Para fins deste MVP acadêmico, os cálculos utilizam médias nacionais (Tarifa ~R$ 0,92/kWh e Irradiação média).