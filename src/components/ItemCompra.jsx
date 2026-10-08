function App() {

  const compras = [
    { id: 1, produto: 'Mangas', quantidade: 5 },
    { id: 2, produto: 'Arroz', quantidade: 2 },
    { id: 3, produto: 'Leite', quantidade: 1 },

  ];
  return (
    <div>
      <h1>Lista de Compras</h1>
      <ul>
        {compras.map((compra) => (
          <li key={compra.id}>
            {compra.produto} - {compra.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;