import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const FiveG = () => {
  const data = useContext(clientContext);
  const { getFiveG, fiveg } = data;

  useEffect(() => {
    getFiveG();
  }, []);

  return (
    <div>
      <Container>
        <div className="products-list">
          {fiveg.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default FiveG;
