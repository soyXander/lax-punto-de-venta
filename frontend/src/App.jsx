import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';
import Productos from './paginas/productos.jsx';
import Ventas from './paginas/ventas.jsx';
import Inventario from './paginas/inventario.jsx';
import Usuarios from './paginas/usuarios.jsx';

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