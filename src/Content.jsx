import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  // const products = [
  //   {
  //     id: 1,
  //     image_url:
  //       "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_FMjpg_UX1000_.jpg",
  //     title: "The Batman",
  //     rating: "PG-13",
  //     description:
  //       "The Batman's hunt for a serial killer leads him into Gotham City's grimy underworld, which may be more entwined with its ruling elite than he'd ever imagined",
  //     cast: "Robert Pattinson, Zoe Kravitz, Jeffrey Wright",
  //     genre: "Action",
  //   },
  // ];

  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:5000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <ProductsIndex products={products} />
    </main>
  );
}
