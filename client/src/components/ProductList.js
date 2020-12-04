import styled from "styled-components/macro";
import Image from "./Image";
import { useState, useEffect } from "react";
import { getProducts } from "../utils/api";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  gap: 10px;
  padding-top: 15px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setProducts(products);
    }
    fetchData();
  }, []);
  return (
    <ListContainer>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <Image src={product.image} size={"small"} />
            </li>
          );
        })}
    </ListContainer>
  );
};

export default ProductList;
