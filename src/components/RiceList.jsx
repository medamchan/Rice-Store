const riceItems = [
  { id: 1, name: "Basmati Rice", price: 20 },
  { id: 2, name: "Sona Masuri", price: 15 },
  { id: 3, name: "Brown Rice", price: 18 },
  { id: 4, name: "Ponni Rice", price: 16 },
];

function RiceList({ addToCart }) {
  return (
    <div className="rice-list">
      <h2>Available Rice</h2>

      {riceItems.map((rice) => (
        <div key={rice.id} className="rice-card">
          <h3>{rice.name}</h3>
          <p>Price: ${rice.price} / kg</p>
          <button onClick={() => addToCart(rice)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default RiceList;
