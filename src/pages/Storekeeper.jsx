import React, { useState, useEffect } from "react";
import { fetchProducts, updateStock } from "../api/api";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const Storekeeper = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  // Cargar los productos desde la API
  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  // Filtrar productos en tiempo real a medida que se escribe en la barra de búsqueda
  const handleSearch = (query) => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // Actualizar el stock de un producto
  const handleUpdateStock = (id, newStock) => {
    updateStock(id, newStock).then(() => {
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, stock: newStock } : p))
      );
    });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ProductList
        products={filteredProducts.length > 0 ? filteredProducts : products}
        onUpdateStock={handleUpdateStock}
      />
    </div>
  );
};

export default Storekeeper;
