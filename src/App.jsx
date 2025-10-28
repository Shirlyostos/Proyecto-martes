import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Barra de navegación */}
      <header className="navbar">
        <h2>Servicio Nacional de Aprendizaje</h2>
        <h3>CGMLTI Bogotá</h3>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Programas</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* Sección de programas */}
      <main className="main-section">
        <h3>Programas</h3>
        <div className="programs">
          <div className="card">ADSO</div>
          <div className="card">Redes de Datos</div>
          <div className="card">Animación 3D</div>
          <div className="card">Logística</div>
          <div className="card">Mercadeo</div>
          <div className="card">Sistemas</div>
        </div>
      </main>

      {/* Formulario de contacto */}
      <section className="contact">
        <h3>Contacto</h3>
        <form>
          <input type="text" placeholder="Nombres" required />
          <input type="text" placeholder="Apellidos" required />
          <textarea placeholder="Mensaje" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Pie de página */}
      <footer>
        <p>© 2025 Servicio Nacional de Aprendizaje - Bogotá</p>
      </footer>
    </div>
  );
}

export default App;
