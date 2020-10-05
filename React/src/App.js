import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import profile from './assets/images/50840503.jpg'


function App() {
  return (
    <div>
      <Header />
      <Main>

      </Main>
      <img src={profile} />
      <Footer />
    </div>
  );
}

export default App;
