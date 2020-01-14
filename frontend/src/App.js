import React from 'react';
import './App.css';

import logo from './assets/Logo.png';


function App() {
  return (
    <div className="container">
      <img src={logo} alt="ChangeYouBody"/ >

      <div className="content">
        <p>
           Oferça <strong>treinamentos</strong> e acompanhamento <strong>profissional</strong> para seus alunos
        </p>
      
      <form>
          <label htmlFor="email">E-MAIL</label>
          <input 
          id="email" 
          type="email" 
          placeholder="Seuu melhor e-mail"
          />

          <button className="btn" type="submit">Entrar</button>
      </form>
      </div>
    </div>
  );
}

export default App;
