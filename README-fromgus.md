# Getting Started with Create React App

https://pt-br.reactjs.org/

Quando trabalhamos com o HTML dentro do JavaScript => JSX (JacaScript XML (linguagem base do html)) 

A extensão TSX se dá pelo TypeScript, especificando que o JSX está sendo escrito com TypeScript

## REACT

- Ao inicializarmos qualquer projeto React, o primeiro passo é inserir o comando yarn start no terminal;
- O Create React App permite utilizar o SASS, do CSS;
  - para isso, é necessário instalar o node-sass
    yarn add node-sass@^5.0.0

## COMPONENTES ##

`Componentes`: pedaços isolados de código, que juntos formam uma aplicação;

Em React, tudo é componente (no React, são funções que devolvem um HTML, por ex); 

Com o advento do React, não é mais recomendado escrever componentes em classe, tudo é feito via função. As novas APIs do React só funcionam em componentes funcionais (baseados em funções);

## PROPRIEDADES ##

`Propriedades`: estamos acostumados a chamar de atributos, no HTML, é um conceito simples

ex:
<div> 
 <a href="" target="_blank"></a>
</div>

- as propriedades podem receber qualquer tipo de valor do Js;

## ESTADO ##

`Estado`: uma informação mantida por um componente dentro do React;

- sempre que uma informação não permanece com o mesmo valor durante todo o uso da aplicação, ela é um Estado;

## SOBRE O REACT ##

- no react, é comum chamarmos funções dentro de funções;
- no react, todo atributo é escrito em CamelCase;

`Imutabilidade`: Conceito a partir do momento que uma variável foi criada dentro de um Estado de um componente, ela não sofre alterações, sempre criamos uma nova informação baseada no que já tinha; Esse conceito trás muita performance para as aplicações;

  ## Exemplo Tradicional
  let counter = 0;

  function increment() {
    counter += 1;
    console.log(counter);
  }

  ## Exemplo React com imutabilidade
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

`Closures`: Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada.

Ver sobre

  - Contextos
  - Como lidar com side-effects
  - Efeitos Colaterais
  - Como lidar com compartilhamento de Estado
  - Estilização

## FIREBASE

O Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web. Originalmente, era uma empresa independente fundada em 2011. Em 2014, o Google adquiriu a plataforma e agora é sua principal oferta para o desenvolvimento de aplicativos.

- se o site tiver algúm domínio, o mesmo deve ser adicionado no Firebase, em projetos em que o mesmo for utilizado;

- ``Firestore Database``: funciona como um banco de dados relacional, onde definimos as tabelas e campos;
- ``Realtime Database``: é um banco de dados no-cycle, não tem a estrutura dos dados, é feito para lidar com real time. não escala tão bem como o Firestore, porém tem melhor performance;

## Adicionando o Firebase ao seu projeto Web:

- Visão Geral do Projeto;
  - Adicionar um App;
    - // irão aparecer 4 botões, com opções de desenvolvimento iOS, Android, Web, Unity;
    - Web
    - Registrar App: dar um nome ao App
    - no Terminal do VSCODE, na pasta do projeto, insira o comando: 
      - yarn add firebase
    - na pasta `src` do projeto, criar a pasta `services` e criar um arquivo chamado `firebase.ts`;
      - import firebase from 'firebase/app';
    - Adicionar o SDK do Firebase
      - Configuração
      Objeto de configuração do Firebase que contém as chaves e identificadores do seu app:
        const firebaseConfig = {
        apiKey: "AIzaSyD0H9swk7kJzzfFFezQHyrSTAXKoLXdrBQ",
        authDomain: "letmeask-6a20c.firebaseapp.com",
        databaseURL: "https://letmeask-6a20c-default-rtdb.firebaseio.com",
        projectId: "letmeask-6a20c",
        storageBucket: "letmeask-6a20c.appspot.com",
        messagingSenderId: "874293370407",
        appId: "1:874293370407:web:435f37341aed78235bf802"
        };  
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
          </script>

    - trabalhar as ``variáveis ambiente``, criando o arquivo 'env.local' na raíz do projeto;
    - colocar no arquivo as configurações de variáveis ambiente seguindo as informações do arquivo firebase.ts, com o padrão de acordo com o arquivo env.local deste projeto (que pode ser usado de exemplo);

    - para o Create React App, para as variáveis ambientes serem visíveis, existe uma regra que todas as variáveis ambiente precisam ter o prefixo começando com REACT_APP_ (ver exemplo do arquivo .env.local);

    - toda vez que mudamos as variáveis ambientes em um projeto, é necessário reiniciar o serviço do react no terminal
      - yarn start
      

## CÓDIGOS DO SORTEIO ROCKETSEAT NLW-TOGETHER

Primeiro Código: #together
Segundo Código: #unidade
Terceiro Código: #embuscadeevolução

## Contextos do React

- utilizado quando se quer compartilhar informações entre diferentes componentes numa aplicação;
- essa informação pode ser qualquer coisa, textos, valores mais complexos como objetos, arrays;
- a forma mais correta e simples de se fazer isso no React é utilizando contextos;

- Context API
- async / await

Componente:

1 - aquilo que se repete;
2 - consigo isolar o funcionamento do restante;

## DEPLOY

O verbo deploy, em inglês, quer dizer implantar.

Em programação, seu sentido está intimamente relacionado à sua tradução literal: fazer um deploy, em termos práticos, significa colocar no ar alguma aplicação que teve seu desenvolvimento concluído.

Esta tarefa é extremamente comum dentro do escopo de trabalho dos programadores, embora seja muito comumente associada somente aos profissionais de infraestrutura, ou DevOps.

## NLW encontro

-- Como criar um botão signOut no projeto do letmeask;
simples:
  criar um metodo dentro do Contexto chamado signOut

  async function signOut() {
    await auth.signOut();
  }
  -somente isso;
  - após, fazer o botão, chamar esta função e pronto.

