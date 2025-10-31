import React, { useEffect, useState } from "react";
import "./Pagination.css";
import ProductCard from "./ProductCard";
import { PAGE_SIZE } from "./constants";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return !products.length ? (
    <h1>No Products found </h1>
  ) : (
    <div className="pagination">
      <h1>Pagination</h1>

      <div className="pagination-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
      <div className="pagination-page-container">
        <button
          disabled={currentPage === 0}
          className="page-number"
          onClick={() => goToPrevPage()}
        >
          Left
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={"page-number " + (n === currentPage ? "active" : "")}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          className="page-number"
          onClick={() => goToNextPage()}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Pagination;
