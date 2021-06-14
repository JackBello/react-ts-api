import React from 'react';

import "./App.css";

import ButtonLink from './Components/buttonLink/ButtonLink';

import ViewRouter from './Router/index.router';

export default function App() {
  return (
    <div className="App">
      <nav className="navegation">
        <ButtonLink rute="/" active icon="home"/>
      </nav>
      <main className="content">
        <ViewRouter/>
      </main>
    </div>
  );
}