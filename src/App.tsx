/* 

Para habilitar o App a ler dois componentes React, é necessário inserir os comandos no terminal:

  yarn add react-router-dom

  quando o projeto é desenvolvido em typescript, como no caso, e o pacote instalado não foi feito em typescript, é necessário seguir com o seguinte comando no terminal;
  
  yarn add @types/react-router-dom
*/
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    /* quando enviamos conteúdo dentro de um componente, isso se torna uma propriedade no React, a qual chamamos de children */
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;