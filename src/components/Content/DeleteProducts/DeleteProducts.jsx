import "./deleteproducts.css";
import { Container, Row, Col } from "react-bootstrap";
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
      <Container style={{ padding: "1rem 0rem"}} >
        <Row xs="auto" style={{ margin:"auto" }}>
          {products &&
            products.map((item, index) => (
              <Col style={{ padding: "0.3rem", border:"1px" }} key={index}>
                <Button
                  className="button"
                  color="primary"
                  onClick={() => handelerDeleteProduct(item)}
                >
                  <h6>{item.name}</h6> <span>{item.price} </span>
                </Button>
              </Col>
            ))}
        </Row>
      </Container>
     </div>
  );
};

export default DeleteProducts;
