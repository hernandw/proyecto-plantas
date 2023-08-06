import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Productos from "./Productos";

const HomePage = () => {
  const { dataProducts, setDataProducts } = useContext(MyContext);

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <h1>Recomendados para tí</h1>

      <hr></hr>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between gap-5">
          {dataProducts.map((product) => (
            <Productos key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
