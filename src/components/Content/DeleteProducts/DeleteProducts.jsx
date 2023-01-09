import "./deleteproducts.css";
import { Button } from "reactstrap";
import { DataCenter } from "../../../DataFile";
import { useContext } from "react";

const DeleteProducts = () => {
  const { products, setProducts } = useContext(DataCenter);

  function handelerDeleteProduct(product) {
    const restProducts = products.filter((item) => item.name !== product.name);

    setProducts(restProducts);
  }

  return (
    <div className="deletproducts">
      
       
          {products &&
            products.map((item, index) => (
              
                <Button key={index}
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
