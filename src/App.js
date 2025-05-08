import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navigációs sáv */}
        <header className="App-header">
          <nav className="nav">
            <ul>
              <li><a href="#home">Főoldal</a></li>
              <li><a href="#about">Rólunk</a></li>
              <li><a href="#services">Szolgáltatások</a></li>
              <li><a href="#contact">Kapcsolat</a></li>
            </ul>
          </nav>
        </header>
        {/* Fő tartalom */}
        <main className="App-main">
          <section id="home">

          </section>
          <section id="about" className="about">
            <h1>Üdvözöljük a weboldalunkon!</h1>
            <p>Örülök, hogy ellátogatott hozzám! Itt találhatók a legfrissebb információk, szolgáltatások és lehetőségek.</p>
            <p>Turcsán Patrik vagyok, programozó, elsősorban frontend fejlesztés terén. Már 6 éve foglalkozom a programozás világával, és az alábbi nyelvekben sajátítottam el a tudást: React, CSS, HTML, JavaScript. A webfejlesztés a fő profilom, amit a következő weboldalon is megtekinthet.</p>
            <p>Itt igyekszem minél változatosabb sémákat alkalmazni, hogy bemutassam a tudásomat. Ha az oldalam elnyerte tetszését, kérem, vegye fel velem a kapcsolatot!</p>
            <p>Az árlista az oldalon található, de a bonyolultabb projektek és különleges igények esetén az árak eltérhetnek a standard díjaktól.</p>
            <p>Tanulmányaimat Kiskunmajsán és Szegeden végeztem.</p>
            <img src="/images/turcsan.jpg" alt="Turcsán Patrik" />
          </section>
          <section id="services">
            <h2>Szolgáltatások</h2>
            <p>Itt található a szolgáltatásaink listája.</p>
          </section>
          <section id="contact">
            <h2>Kapcsolat</h2>
            <p>Itt található a kapcsolatfelvételi űrlap.</p>
          </section>
        </main>
        {/* Footer */}
        <footer className="App-footer">
          <p>Ez az alsó rész tartalma.</p>
        </footer>
      </div>
    );
  }
}

export default App;
