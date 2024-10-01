# Desafio - Rest Countries

Este projeto foi desenvolvido como parte de um desafio para construir uma plataforma web interativa que consome a API RestCountries. O objetivo é listar e exibir informações detalhadas sobre países, com funcionalidades de busca, filtros e ordenação.

## Veja como ficou
https://rest-countries-chi-nine.vercel.app/

## Atualizações Futuras
* Melhorar a semântica HTML visando acessibilidade e boas práticas de SEO;
* Implementar Media Query visando melhorar a UX em diferentes telas;
* Analisando a estrutura atual da aplicação, sinto a necessidade de modificar os menus de filtro e ordenação. Atualmente, o menu está estruturado como um Dropdown, que, embora transmita a sensação de um design limpo por economizar espaço visual, apresenta problemas em relação à segurança na seleção das opções desejadas. Caso o usuário mova o mouse fora da área de seleção, o menu fecha inadvertidamente. Para amenizar esse problema, implementei uma solução em que o menu mantém o último estado clicado, de modo que, se o usuário retirar o mouse da área de seleção, ao voltar, o menu permaneça da mesma forma. No entanto, essa abordagem ainda oferece dificuldades de interação em telas touch. Poderia simplesmente fazer um menu full onClick ? Sim! Mas preferi utilizar as técnicas existentes em alguns sites de venda/varejo.
 Dito isso, irei modificar os menus para uma filtragem e ordenação com múltiplas seleções (um menu com checkbox). Embora essa solução consuma mais espaço de tela, a experiência do usuário (UX) será aprimorada, oferecendo mais clareza e facilidade de uso. As opções de filtro e ordenação serão mais acessíveis e proporcionarão um feedback imediato. Isso também simplificará o código, já que a adição de botões para remover filtros selecionados será desnecessária; 
* Melhorar a estilização e adicionar modo Light e Dark;
* O projeto irá se manter constantemente atualizado.

## Planejamento
* Foi utilizado o [Notion](https://www.notion.so/) para gerenciar o desenvolvimento do projeto, incluindo seções em desenvolvimento, testes e partes concluídas.
* Foi utilizada a biblioteca [Styled Components](https://styled-components.com/docs) para aplicar estilizações diretamente nos componentes, facilitando o uso de temas e a manutenção do design.
* A biblioteca [React Router](https://reactrouter.com/en/main) foi utilizada para implementar a navegação entre as diferentes páginas da aplicação, como a lista de países e a página de detalhes de cada país.
* A biblioteca [React Icons](https://react-icons.github.io/react-icons/) foi usada para adicionar ícones de maneira simples.

## O Projeto
Neste desafio, o objetivo foi criar uma plataforma web que consome a API RestCountries para listar e exibir informações sobre países ao redor do mundo. O projeto conta com uma interface interativa e responsiva, permitindo aos usuários explorar a lista de países, aplicar filtros e ordenações, além de visualizar detalhes completos sobre um país específico.

### 1.1 Tela de Listagem de Países

Crie uma interface para explorar e descobrir países ao redor do mundo. A tela deve permitir ao usuário navegar por uma lista de países com a capacidade de aplicar filtros, ordenar a lista e buscar por um país específico.

#### Funcionalidades:

**Consumo de API:**
* Obtenha a lista de países da API RestCountries (realize uma consulta GET em https://restcountries.com/v3.1/all).

**Exibição dos Países:**
* Exiba informações como nome, bandeira, capital e região de cada país.
* A listagem deve ser paginada ou suportar scroll infinito (implementado no lado do cliente, pois a API não suporta paginação).

**Busca por Nome:**
* Implementar um campo de busca que permite ao usuário procurar por um país específico pelo nome.

**Filtros:**
* Filtro por Sub-região.
* Filtro por Região.
* Filtro por População (intervalos: <1M, 1M-10M, 10M-100M, >100M).

**Ordenação:**
* Ordenação por Nome do País.
* Ordenação por População.
* Ordenação por Área.

**Navegação:**
* Ao clicar em um país, o usuário deve ser redirecionado para a Tela de Detalhes do País selecionado.

### 1.2 Tela de Detalhes do País

A página dedicada oferece uma visão mais profunda sobre um país específico, detalhando várias informações relevantes.

#### Funcionalidades:

**Exibição de Informações Detalhadas:**
* Nome oficial do país.
* Bandeira.
* Capital.
* Região e sub-região.
* População.
* Área.
* Idiomas falados.
* Moedas.
* Fuso horário.
* Domínio de internet (código TLD).
* Código de discagem internacional.

**Navegação de Volta:**
* Um botão ou link para retornar à Tela de Listagem de Países.

### Extras:
* Foi adicionada a opção de remover filtros selecionados, proporcionando maior controle e personalização na navegação pelos países.

## Documentação
* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [React](https://react.dev/learn/start-a-new-react-project)
* [Styled Components](https://styled-components.com/docs)
* [React Router](https://reactrouter.com/en/main)
* [React Icons](https://react-icons.github.io/react-icons/)
