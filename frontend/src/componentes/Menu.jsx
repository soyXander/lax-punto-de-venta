import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Punto de Venta</h2>
      <ul style={styles.menuList}>
        <li><Link to="/productos" style={styles.menuItem}>Productos</Link></li>
        <li><Link to="/ventas" style={styles.menuItem}>Ventas</Link></li>
        <li><Link to="/inventario" style={styles.menuItem}>Inventario</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    color: 'white',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
    display: 'block',
  },
};

export default Menu;
