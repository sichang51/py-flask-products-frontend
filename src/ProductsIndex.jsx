export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image_url} />
          <p>Rating: {product.rating}</p>
          <p>Description: {product.description}</p>
          <p>Cast: {product.cast}</p>
          <p>Genre: {product.genre}</p>
        </div>
      ))}
    </div>
  );
}
