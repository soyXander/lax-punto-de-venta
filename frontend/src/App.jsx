import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <section className="flex gap-x-4 p-4 justify-center gap-24">
        <Card
          titulo="Total de ventas"
          imgUrl="https://via.placeholder.com/50"
        />
         <Card
          titulo="total de Clientes"
          imgUrl="https://via.placeholder.com/50"
        /> <Card
          titulo="Total de Pedidos"
          imgUrl="https://via.placeholder.com/50"
        /> <Card
          titulo="Compras totales"
          imgUrl="https://via.placeholder.com/50"
        />
      </section>
    </>
  );
}

export default App;
