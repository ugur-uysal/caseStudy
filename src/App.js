
import React from 'react';
import Router from './router';
import Header from './layout/header';

const App = () => (
  <div className="container">
    <Header />
    <section>
      <div className="content">
        <Router />
      </div>
    </section>
  </div>);

export default App;
