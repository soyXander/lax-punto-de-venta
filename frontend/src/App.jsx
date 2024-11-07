import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';
import Productos from './paginas/Productos';
import Ventas from './paginas/Ventas';
import Inventario from './paginas/Inventario';
import Inventario from './paginas/Usuarios';
import Usuarios from './paginas/usuarios';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/productos" element={<Productos />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;