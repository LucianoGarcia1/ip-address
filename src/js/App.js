import '../css/App.css';
import Header from '../components/header/header.js';
import Conteudo from '../components/main/main.js';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Conteudo></Conteudo>
    </div>
  );
}

export default App;
