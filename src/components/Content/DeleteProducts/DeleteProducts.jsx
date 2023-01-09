import "./deleteproducts.css";
import { Button } from "reactstrap";
import { DataCenter } from "../../../DataFile";
import { useContext } from "react";

const DeleteProducts = () => {
  const { products, setProducts } = useContext(DataCenter);

  function handelerDeleteProduct(product) {
    console.log(products)
    const restProducts = products.filter((item) => {
   
      return (item.name !== product.name || item.size !== product.size || item.price !== product.price );
    });
    console.log(restProducts)

    setProducts(restProducts);
  }

  return (
    <div className="deletproducts">
      {products &&
        products.map((item, index) => (
          <Button
            key={index}
            className="button"
            color="primary"
            onClick={() => handelerDeleteProduct(item)}
          >
            <h6>{item.name}</h6> <span>{item.size} </span>
          </Button>
        ))}
    </div>
  );
};

export default DeleteProducts;
